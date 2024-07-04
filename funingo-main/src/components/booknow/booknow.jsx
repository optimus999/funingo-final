import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  CircularProgress,
  TextField,
  Icon,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import "./styles.scss";
import Select from "react-select";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import AccordionList from "./accordioncard";
import shortid from "shortid";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl, flag_prices, percent_of_fm_to_use } from "../../constants";
import PaymentButton from "./payment";
import Packagecard from "./packagescard";
import {
  validateEmail,
  validatePhoneNumber,
  validateAge,
} from "../../utils/validators/validate";
import {
  addPackages,
  addPersons,
  addFreebies,
  removeFreebies,
} from "../../utils/store/slice/userSlice";
import { getDiscount } from "../../actions/ticket";
import IndividualFlag from "./individualFlags";
import funingoflag from "./funingoflag";
import { Tour } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import Ticket from "./ticket";
import ConfirmationModal from "../windowPurchase/modal";
import { P1000, P1500, P2000, P2500, P3000, P500, P5000, arrow } from "../../assets";
import { red } from "@mui/material/colors";
import { openAuthModal } from '../../utils/store/slice/appSlice';


export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

const packageInfo = [
  {
    text: "Tampoline Island",
    image: P2500,
  },
  {
    text: "Paintball",
    image: P2500,
  },
  {
    text: "Get Blaster Arena",
    image: P1500,
  },
  {
    text: "Low Ropes",
    image: P1500,
  },
  {
    text: "High Ropes",
    image: P1500,
  },
  {
    text: "Giant Swing",
    image: P5000,
  },
  {
    text: "Sky Cycle",
    image: P3000,
  },
  {
    text: "Commando Climb",
    image: P500,
  },
  {
    text: "Peak Rock Climb",
    image: P2000,
  },
  {
    text: "Meltdown",
    image: P1000,
  },
  {
    text: "Bucking Bull Arena",
    image: P1000,
  },
  {
    text: "Kids Obstacle",
    image: P500,
  },
  {
    text: "Sumo Showdown",
    image: P500,
  },
  {
    text: "Archery Alley",
    image: P500,
  },
  {
    text: "Shooter's Range",
    image: P1000,
  },
  {
    text: "Pedal Go Kart",
    image: P1000,
  },
  {
    text: "Sumo Showdown",
    image: P500,
  },
  {
    text: "Archery Alley",
    image: P500,
  },
  {
    text: "Shooter's Range",
    image: P1000,
  },
  {
    text: "Pedal Go Kart",
    image: P1000,
  },
];

const initialValues = {
  id: "",
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  price: "",
  package: "",
  freebies: "",
  date: null,
  time: "",
  extra_red: 0,
  extra_green: 0,
  extra_yellow: 0,
  golden_flag: 0,
  funingocoins: 0,
  totalfuningocoinsassigned: 0,
  isChecked: false,
};
const initialErrorMsg = {
  name: "",
  email: "",
  phone: "",
  age: "",
  gender: "",
  price: "",
  package: "",
  freebies: "",
  funingocoins: "",
  totalfuningocoinsassigned: "",
  error: false,
};
const Booknow = () => {
  const dispatch = useDispatch();

  const {
    userData = {},
    token,
    isPremium,
  } = useSelector((store) => store.userSlice);
  const packagesData = useSelector((store) => store.userSlice.packagesData);
  const packageMap = useSelector((store) => store.userSlice.packageMap);
  const personsList = useSelector((store) => store.userSlice.personList);
  const isLoggedIn = useSelector((store) => store.userSlice.isLoggedIn);
  const freebiesArray = useSelector((store) => store.userSlice.freebiesArray);

  const isMobile = useMediaQuery("(max-width:900px)");
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(initialErrorMsg);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState({});
  const [gstPrice, setGstPrice] = useState(0);
  const [code, setCode] = useState("");
  const [showTrampolinePopup, setShowTrampolinePopup] = useState(false);
  const [premium50Live, setPremium50Live] = useState(0);
  const [premium100Live, setPremium100Live] = useState(0);
  const [selectedPremium, setSelectedPremium] = useState(null);
  const [usedFuningoMoney, setUseFuningoMoney] = useState(0);
  const [totalPremiumDiscount, setTotalPremiumDiscount] = useState(0);
  const [weekdayPackage, setWeekdayPackage] = useState(false);
  const [disablevar, setdisablevar] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const [showTicket, setShowTicket] = useState({ show: false, data: null });
  // const [isChecked, setIsChecked] = useState(false);
  const today = new Date().getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, and so on)
  const isWeekend = today === 0 || today === 6;
  const [promoCodeOptions, setPromoCodeOptions] = useState([]);


  useEffect(() => {
    // Set usedFuningoMoney to Number(values.totalfuningocoinsassigned) initially
    setUseFuningoMoney(Number(values.totalfuningocoinsassigned));
  });

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const disablevariable=()=>{
    // if(!isLoggedIn)
    //   {
    //     dispatch(openAuthModal());
    //     return;
    //   }
    setdisablevar(true);
  }



  let weekdaypackageprice = 0;
  const {
    values,
    setFieldValue,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      setErrorMsg(initialErrorMsg);
      if (values?.id.length === 0) values.id = shortid.generate();
      let errmessage = "";
      try {
        if (!validateAge(values.age)) {
          setErrorMsg({
            ...errorMsg,
            age: "Invalid Age",
          });
          resetForm({
            values: {
              ...values,
              age: "",
            },
          });
          errmessage += "Invalid Age Entry ";
        }
        if (!validateEmail(values.email)) {
          setErrorMsg({
            ...setErrorMsg,
            email: "Email Address is invalid",
          });
          errmessage += "Email Address is invalid ";
        }

        if (!validatePhoneNumber(values.phone)) {
          setErrorMsg({
            ...setErrorMsg,
            phone: "Invalid Phone Number",
          });
          errmessage += "Invalid Phone Number";
        }

        if (
          Number(values.funingocoins) > userData?.funingo_money ||
          Number(values.funingocoins) < 0
        ) {
          setErrorMsg({
            ...setErrorMsg,
            funingocoins: "Invalid Funingo Coins",
          });
          errmessage += "Invalid Funingo Coins";
        }

        if ((Number(values.totalfuningocoinsassigned)) + Number((values.funingocoins)) > userData?.funingo_money) {
          console.log("Number(values.totalfuningocoinsassigned)", (Number(values.totalfuningocoinsassigned)));
          console.log("Number(values.funingocoins)", Number(values.funingocoins));
          console.log("userData?.funingo_money", userData?.funingo_money);
          setErrorMsg({
            ...setErrorMsg,
            totalfuningocoinsassigned: "Funingo Coins exceeded",
          });
          errmessage += "Funingo Coins exceeded";
        }

        if (errmessage.length !== 0) {
          throw new Error(errmessage);
        }

        if (errmessage.length == 0) {
          let weekdayprice = values.isChecked == true ? weekdaypackageprice : 0;
          values.extra_yellow =
            values.extra_yellow + Number(values.funingocoins);
          (values.totalfuningocoinsassigned) =
            Number(values.totalfuningocoinsassigned) + Number(values.funingocoins);
          console.log("values.extra_yellow" + values.extra_yellow);
          console.log(
            "totalfuningocoins assigned" + Number(values.totalfuningocoinsassigned)
          );
        }

        if (selectedPremium?.premium_type === "50%") {
          setPremium50Live((curr) =>
            curr.filter((pre) => pre._id !== selectedPremium._id)
          );
        } else if (selectedPremium?.premium_type === "100%") {
          setPremium100Live((curr) =>
            curr.filter((pre) => pre._id !== selectedPremium._id)
          );
        }

        const pID = values?.package;
        const pkgObj = packageMap?.[pID];
        values = {
          ...values,
          price:
            (pkgObj?.price ?? 0) +
            (values.extra_red * flag_prices.red_flag_price +
              // values.extra_yellow * flag_prices.yellow_flag_price +      //since funingo coins are of user only hence no need to add that amount
              values.extra_green * flag_prices.green_flag_price +
              values.golden_flag * flag_prices.golden_flag_price),
          selectedPremium,
        };
        // if (selectedPremium === '50%') {
        //   setTotalPremiumDiscount(curr => curr + Math.floor(values.price / 2));
        // }
        // setTotalPrice(curr => curr + values.price);
        setPersons([...persons, values]);

        resetForm({
          values: {
            ...values,
            name: "",
            age: "",
            gender: "",
            package: "",
            id: "",
            extra_green: 0,
            extra_red: 0,
            extra_yellow: 0,
            golden_flag: 0,
          },
        });
        setSelectedPremium(null);
      } catch (error) {
        console.log(error.message, error);
      }
    },
  });

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const resp = await getDiscount({
          token,
          code,
          total_amount: totalPrice - totalPremiumDiscount,
        });
        const prcodes = resp.allcoupons.map((coupon) =>coupon.code).filter((code) => code.startsWith('bulk'));;
        // console.log("prcodes",prcodes);
        setPromoCodeOptions(prcodes);
      } catch (error) {
        console.error("Error fetching promo codes:", error);
      }
    };
    fetchDiscount();
  }, [isLoggedIn,totalPrice]);

  const getDiscountUsingCoupon = async () => {
    if(!isLoggedIn)
      {
        dispatch(openAuthModal());
        return;
      }
      const resp = await getDiscount({
        token,
        code,
        total_amount: totalPrice - totalPremiumDiscount,
      })
      setCouponDiscount({ discount: resp.discount, message: resp.msg, code });
  };

  // const handleCheckbox = () => {
  //   setWeekdayPackage(prevState => !prevState); // Toggle checkbox state
  // };
  const handleCheckboxChange = () => {
    values.isChecked = !values.isChecked;
  };

  // const packageOptions = packagesData.map(packageObj => (
  //   {
  //   value: packageObj?._id,
  //   label: <Packagecard data={packageObj} boolFlag={true} />
  // }));

  const packageOptions = packagesData
    .map((packageObj) => {
      if (packageObj.name === "special") {
        weekdaypackageprice = packageObj.price;
        return null; // Skip this iteration
      }
      // console.log(packageObj);  //Logging packageObj
      return {
        value: packageObj?._id,
        label: <Packagecard data={packageObj} boolFlag={true} />,
      };
    })
    .filter((option) => option !== null);

  const freebiesOption = freebiesArray
    .filter(
      (freebiesObj) =>
        !persons.some((person) => person?.freebies === freebiesObj?.id)
    )
    .map((freebiesObj) => ({
      value: freebiesObj?.id,
      label: <Packagecard data={freebiesObj} boolFlag={false} />,
    }));

  const timeOptions = [
    { value: "10-12", label: "10am-12am" },
    { value: "12-14", label: "12am-2pm" },
    { value: "14-16", label: "2pm-4pm" },
    { value: "16-18", label: "4pm-6pm" },
    { value: "18-20", label: "6pm-8pm" },
  ];

  const handleSelectedPremiumChange = (event) => {
    setSelectedPremium((curr) => {
      if (curr?.premium_type === event.target.id) {
        if (curr?.premium_type === "50%") {
          setPremium50Live((cur) => [...cur, curr]);
        } else {
          setPremium100Live((cur) => [...cur, curr]);
        }
        return null;
      }
      return event.target.id === "50%" ? premium50Live[0] : premium100Live[0];
    });
  };

  const handleResetBookForm = () => {
    resetForm(initialValues);
  };

  // const [funingocoinvalues, setfuningocoinvalues] = useState(initialNumber(values.funingocoins));

  // const handleFuningoCoin = (event) => {
  //   const { name, funingocoinvalues } = event.target;
  //   setfuningocoinvalues({
  //     ...funingocoinvalues,
  //     [name]: funingocoinvalues,
  //   });
  // };

  useEffect(() => {
    setGstPrice(
      Math.max(
        Math.round(
          (0.18 *
            (totalPrice -
              totalPremiumDiscount -
              // usedFuningoMoney -
              (couponDiscount?.discount || 0)) +
            Number.EPSILON) *
          100
        ) / 100,
        0
      )
    );
  }, [totalPrice, totalPremiumDiscount, usedFuningoMoney, couponDiscount]);

  useEffect(() => {
    let total = 0,
      premiumDiscount = 0;

    persons.forEach((person) => {
      console.log("person here", person);
      total += person.price;
      if (person.selectedPremium?.premium_type === "50%")
        premiumDiscount += Math.floor(person.price / 2);
    });


    setTotalPremiumDiscount(premiumDiscount);
    setTotalPrice(total);
  }, [persons]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${apiUrl}/package`);
        if (!response.data.success) {
          throw new Error("Couldn't Fetch Packages");
        }
        dispatch(addPackages(response.data.packages));
        setIsLoading(false);
      } catch (error) {
        console.error(error.message, error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    if (personsList && personsList.length !== 0) {
      setPersons(personsList);
    }

    return () => {
      dispatch(addPersons(persons));
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Login or SignUp First");
        }

        const headers = {
          token: token,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${apiUrl}/user/freebies`, {
          headers: headers,
        });

        if (!response.data.success) {
          throw new Error("Couldn't Fetch Freebies");
        }
        dispatch(addFreebies(response.data?.freebies));
        console.log("fetched freebies", response.data);
      } catch (error) {
        dispatch(removeFreebies());
        console.log(error.message, error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [isLoggedIn]);

  useEffect(() => {
    if (showTrampolinePopup) {
      const timeoutId = setTimeout(() => {
        setShowTrampolinePopup(false);
      }, 3000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showTrampolinePopup]);

  useEffect(() => {
    if (userData) {
      setPremium50Live(
        userData?.premium?.filter(
          (data) =>
            new Date(data.expires_on) > Date.now() &&
            data?.premium_type === "50%"
        )
      );
      setPremium100Live(
        userData?.premium?.filter(
          (data) =>
            new Date(data.expires_on) > Date.now() &&
            data?.premium_type === "100%"
        )
      );
      resetForm({
        values: {
          ...values,
          email: values.email
            ? values.email
            : userData?.email
              ? userData.email
              : "",
          phone: values.phone
            ? values.phone
            : userData?.phone_no
              ? userData.phone_no.split("-")?.[1]
              : "",
        },
      });
    }
  }, [userData]);

  // For mobile version of Charges Information

  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    if (gridRef.current && !gridRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <Grid className="booknow">

      {isLoading && (
        <Grid className="loading-overlay">
          <CircularProgress />
        </Grid>
      )}
      {/* first box */}
      <Grid height="70vh" className="top">
        <Typography height="60vh" className="heading">
          Happy Adventuring
        </Typography>
      </Grid>

      {showTicket.show && (
        <Ticket
          open={showTicket.show}
          onClose={() => setShowTicket(false)}
          isPremium={isPremium}
          ticket={showTicket.data}
        />
      )}

      <Grid className="top2 flex lg:justify-evenly lg:flex-row max-md:flex-col max-md:flex-wrap max-md:justify-center max-md:p-5" mb={"2%"}>
        {/* Mobile button  */}
        <button 
          onClick={toggleVisibility}
          className="
            z-50 h-10 text-[15px] lg:hidden max-sm:flex
            content-center items-center justify-center
            w-44 p-3 rounded-3xl
            bg-[#03ea2e] buttonText
            cursor-pointer absolute left-8
          ">
          VIEW ACTIVITY COSTS
        </button>
        {/* Left Information Grid Mobile Version  */}
        {isVisible && (
          <Grid className={`bukFormMobile z-[500] absolute w-[100%] lg:hidden ${isVisible ? 'slide-in' : 'slide-out'}`}>
            {packageInfo.map((info, index) => (
              <div key={index} className={`flex w-full h-16 ${index % 2 === 0 ? 'bg-yellow-200' : 'bg-red-200'}`}>
                <div className="text-left justify-center items-center w-1/2 p-4">
                  <h2>{info.text}</h2>
                </div>
                <div className="w-1/2 p-4 flex justify-end items-center">
                  <img className="w-32" src={info.image} alt={info.text} />
                </div>
              </div>
            ))}
          </Grid>
        )}

        {/* Left Informative Grid Desktop Version  */}
        <Grid className="bukForm max-md:hidden">
          {packageInfo.map((info, index) => (
            <div key={index} className={`flex w-full h-16 ${index % 2 === 0 ? 'bg-yellow-200' : 'bg-red-200'}`}>
              <div className="text-left justify-center items-center w-1/2 p-4">
                <h2>{info.text}</h2>
              </div>
              <div className="w-1/2 p-4 flex justify-end items-center">
                <img className="w-32" src={info.image} alt={info.text} />
              </div>
            </div>
          ))}
        </Grid>
        {/* Form Grid  */}
        <Grid className="book-form">
          <Grid className="form-heading">BOOK NOW!</Grid>
          {persons && persons.length !== 0 && (
            <Grid
              className="people-card"
              width={isMobile ? "90%" : "75%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              mb={"20px"}
            >
              <AccordionList
                persons={persons}
                setPersons={setPersons}
                packagesData={packagesData}
                setTotalPrice={setTotalPrice}
                freebiesOption={freebiesOption}
                setPremium100Live={setPremium100Live}
                setPremium50Live={setPremium50Live}
              />
            </Grid>
          )}

          <Grid className="details">
            <form onSubmit={handleSubmit}>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <Grid className="input-email">
                  <label className="book-now-label">Email Address</label>
                  <input
                    name="email"
                    type="text"
                    width={"100%"}
                    placeholder="Email ID"
                    value={values.email}
                    // onChange={handleInputChange} 
                    disabled={disablevar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                  />
                  {errorMsg && errorMsg?.email && errorMsg.email !== 0 && (
                    <Typography
                      sx={{ color: "red !important", fontSize: "13px" }}
                    >
                      {errorMsg.email}
                    </Typography>
                  )}
                </Grid>
                <Grid className="input-number">
                  <label className="book-now-label">Phone Number </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    value={values.phone}
                    disabled={disablevar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                  />
                  {errorMsg &&
                    errorMsg?.phone &&
                    errorMsg.phone.length !== 0 && (
                      <Typography
                        sx={{ color: "red !important", fontSize: "13px" }}
                      >
                        {errorMsg.phone}
                      </Typography>
                    )}
                </Grid>
              </Grid>

              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <Grid className="input-name">
                  <label className="book-now-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                  />
                </Grid>
                <Grid className="input-age-gender">
                  <Grid className="input-age">
                    <label className="book-now-label">Age</label>
                    <input
                      name="age"
                      type="text"
                      placeholder="Age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                    />
                    {errorMsg && errorMsg?.age && errorMsg.age !== 0 && (
                      <Typography
                        sx={{ color: "red !important", fontSize: "13px" }}
                      >
                        {errorMsg.age}
                      </Typography>
                    )}
                  </Grid>

                  <Grid className="input-gender">
                    <label className="book-now-label">Gender</label>
                    <Select
                      id="gender"
                      name="gender"
                      value={
                        genderOptions.find(
                          (option) => option?.value === values?.gender
                        ) ?? null
                      }
                      onChange={(e) => {
                        setFieldValue("gender", e?.value);
                        // handleChange(e?.value);
                      }}
                      onBlur={handleBlur}
                      placeholder="Select"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          background: "white",
                          height: "40px",
                        }),
                        input: (provided) => ({
                          ...provided,
                          color: "black",
                          "& input": {
                            height: "30px",
                          },
                        }),
                        ValueContainer: (provided) => ({
                          ...provided,
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          color: state.isSelected ? "white" : "black",
                        }),
                      }}
                      required={true}
                      isSearchable={false}
                      options={genderOptions}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  mb: "10px",
                }}
              >
                {premium50Live.length > 0 && (
                  <Grid display={"flex"}>
                    <Radio
                      id="50%"
                      name="premium"
                      onClick={handleSelectedPremiumChange}
                      checked={selectedPremium?.premium_type === "50%"}
                      sx={{
                        color: "white",
                        padding: "0px",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        paddingRight: "5px",
                      }}
                    />
                    <Typography
                    sx={{
                      color: "white"}}
                      component={"label"}
                      htmlFor="50%"
                      display={"block"}
                    >
                      Apply 50% Premium for this person
                    </Typography>
                  </Grid>
                )}
                {premium100Live.length > 0 && (
                  <Grid display="flex">
                    <Radio
                      id="100%"
                      name="premium"
                      onClick={handleSelectedPremiumChange}
                      checked={selectedPremium?.premium_type === "100%"}
                      sx={{
                        color: "white",
                        padding: "0px",
                        "&.Mui-checked": {
                          color: "white",
                        },
                        paddingRight: "5px",
                      }}
                    />
                    <Typography
                    sx={{
                      color: "white"}}
                      component={"label"}
                      htmlFor="100%"
                      display={"block"}
                    >
                      Apply 100% Premium for this person&nbsp;
                      <Typography
                        component={"span"}
                        sx={{
                          fontSize: "12px",
                        }}
                      >
                        {"(Selecting packages won't be required)"}
                      </Typography>
                    </Typography>
                  </Grid>
                )}
              </Grid>

              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                width={"100%"}
              // border={"2px solid red"}
              >

                {/* start */}
                <Grid className="input-package">
                  <label className="book-now-label">Select Packages</label>
                  <Select
                    id="package"
                    name="package"
                    isDisabled={selectedPremium?.premium_type === "100%"}
                    value={
                      packageOptions.find(
                        (option) => option.value === values?.package
                      ) ?? null
                    }
                    onChange={(e) => {
                      setFieldValue("package", e?.value || null);
                      // handleChange(e?.value || null);
                    }}
                    onBlur={handleBlur}
                    placeholder="Select a package..."
                    styles={{

                      control: (provided) => ({
                        ...provided,
                        background: "white",
                      }),
                      input: (provided) => ({
                        ...provided,
                        color: "black",
                        "& input": {
                          height: "30px",
                        },
                      }),
                      option: (provided, { isSelected }) => ({
                        ...provided,
                        background: isSelected ? "beige" : "white",

                        "&:hover": {
                          background: "#f5f5dc63",
                        },
                      }),
                    }}
                    required={Number(values.totalfuningocoinsassigned) > 200}
                    isSearchable={false}
                    options={packageOptions}
                    isClearable
                  />
                </Grid>
                {/* end */}
              </Grid>

              {/* <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
              >
                <Grid className="input-freebies"> */}
              {/* <Grid mb='15px' title='One Trampoline flag is for 30 minutes'>
                    <Typography className='book-now-label' fontSize={'16px'}>
                      For Trampoline Park{' '}
                      <Typography
                        component={'span'}
                        fontSize={'12px'}
                        position={'relative'}
                      >
                        (Can be selected without other packages)&nbsp;
                        <InfoIcon
                          sx={{
                            width: '15px',
                            height: '15px',
                            cursor: 'pointer'
                          }}
                          onClick={() => setShowTrampolinePopup(true)}
                        />
                        {showTrampolinePopup && (
                          <Typography
                            sx={{
                              position: 'absolute',
                              right: '-150px',
                              top: '-22px',
                              background: 'white',
                              color: 'black',
                              padding: '0px 5px',
                              borderRadius: '5px'
                            }}
                          >
                            One Trampoline flag is for 30 minutes
                          </Typography>
                        )}
                      </Typography>
                    </Typography>
                    <IndividualFlag
                      label={
                        <Tour
                          sx={{
                            color: '#FFD700'
                          }}
                        />
                      }
                      isDisabled={selectedPremium?.premium_type === '100%'}
                      value={values.golden_flag}
                      onChange={val => setFieldValue('golden_flag', val)}
                    />
                  </Grid> */}
              {/* <label className="book-now-label">Funingo coins</label>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  > */}
              {/* <IndividualFlag
                      label={
                        <Tour
                          sx={{
                            color: '#fa1942'
                          }}
                        />
                      }
                      isDisabled={selectedPremium?.premium_type === '100%'}
                      value={values.extra_red}
                      onChange={val => setFieldValue('extra_red', val)}
                    /> */}
              {/* <IndividualFlag
                      label={
                        <Tour
                          sx={{
                            color: "#e7e710",
                          }}
                        />
                      }
                      isDisabled={selectedPremium?.premium_type === "100%"}
                      value={values.extra_yellow}
                      onChange={(val) => setFieldValue("extra_yellow", val)}
                    /> */}
              {/* <IndividualFlag
                      label={
                        <Tour
                          sx={{
                            color: '#76de9a'
                          }}
                        />
                      }
                      isDisabled={selectedPremium?.premium_type === '100%'}
                      value={values.extra_green}
                      onChange={val => setFieldValue('extra_green', val)}
                    /> */}
              {/* </Grid> */}

              {/* 
                  <Grid
                display={'flex'}
                justifyContent={'space-between'}
                mb={'15px'}
                flexDirection={isMobile ? 'column' : 'row'}
              > */}

              {/* /spirits */}

              {/* {userData?.funingo_money != 0 && (
                    <Grid className="input-number">
                      <label
                        style={{
                          width: "35rem",
                          paddingTop: "1.5rem",
                          color: "white",
                          fontWeight: "700",
                          fontSize: "1.2rem",
                        }}
                        className="book-now-label"
                      >
                        Use Existing Funingo coins
                      </label>
                      <input
                        style={{
                          height: "2.6rem",
                          borderRadius: "5px",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          width: "35rem",
                          border: "1px solid #ccc",
                          fontSize: "1rem",
                          marginTop: "0.5rem",
                        }}
                        name="funingocoins"
                        type="number"
                        placeholder="Add your Funingo Coins here."
                        value={Math.max(0, Number(values.funingocoins))}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      {(errorMsg &&
                        errorMsg?.funingocoins &&
                        errorMsg.funingocoins.length !== 0 && (
                          <Typography
                            sx={{ color: "red !important", fontSize: "13px" }}
                          >
                            {errorMsg.funingocoins}
                          </Typography>
                        )) ||
                        (errorMsg &&
                          errorMsg?.totalfuningocoinsassigned &&
                          errorMsg.totalfuningocoinsassigned.length !== 0 && (
                            <Typography
                              sx={{ color: "red !important", fontSize: "13px" }}
                            >
                              {errorMsg.totalfuningocoinsassigned}
                            </Typography>
                          ))}
                    </Grid>
                  )} */}

              {/* </Grid> */}

              {/* <Grid className='input-checkbox'>
                  <label className='book-now-label'>Unlimited Weekday Package</label>
                  <input
                    name='weekdayPackage'
                    type='checkbox'
                    checked={values.weekdayPackage}
                    onChange={handleCheckbox}
                    onBlur={handleBlur}
                    // required={true}
                  />
                  </Grid> */}

              {/* {!isWeekend && (
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "2rem",
                        width: "35.5rem",
                        backgroundColor: "white",
                        height: "2.5rem",
                        backgroundColor: "yellow",
                        borderTopRightRadius: "5rem",
                        borderTopLeftRadius: "5rem",
                        borderBottomLeftRadius: "5rem",
                        borderBottomRightRadius: "5rem",
                      }}
                    >
                      <label
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontSize: "1.2rem",
                        }}
                      >
                        <input
                          style={{
                            width: "1rem",
                            height: "1rem",
                            marginRight: "0.5rem",
                          }}
                          type="checkbox"
                          name="weekdayPackage"
                          // checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        UNLIMITED WEEKDAY PACKAGE
                      </label>
                    </Grid>
                  )} */}


              {/* </Grid> */}
              {/* </Grid> */}

              {/* testing start */}

              {userData?.funingo_money != 0 && (
                <Grid
                  display={"flex"}
                  justifyContent={"space-between"}
                  mb={"15px"}
                  width={"100%"}
                >
                  <Grid className="input-funingo-coins">
                    <label className="book-now-label">Use Existing Funingo coins</label>
                    <input
                      className="input-funingo"
                      name="funingocoins"
                      // type="number"
                      placeholder="Add your Funingo Coins here."
                      value={Number(values.funingocoins)}
                      onChange={handleChange}
                      // onClick={handleFuningoCoin}
                      onBlur={handleBlur}
                    />

                    {(errorMsg &&
                      errorMsg?.funingocoins &&
                      errorMsg.funingocoins.length !== 0 && (
                        <Typography
                          sx={{ color: "red !important", fontSize: "13px" }}
                        >
                          {errorMsg.funingocoins}
                        </Typography>
                      )) ||
                      (errorMsg &&
                        errorMsg?.totalfuningocoinsassigned &&
                        errorMsg.totalfuningocoinsassigned.length !== 0 && (
                          <Typography
                            sx={{ color: "red !important", fontSize: "13px" }}
                          >
                            {errorMsg.totalfuningocoinsassigned}
                          </Typography>
                        ))}
                  </Grid>
                </Grid>
              )}

              {/* weekend start */}

              {/* {!isWeekend && (
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                width={"100%"}
              >
                <Grid className="input-weekday">
                <label className="weekday-label">
                        <input
                          className="weekday-input-checkbox"
                          type="checkbox"
                          name="weekdayPackage"
                          // checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        UNLIMITED WEEKDAY PACKAGE
                      </label>
                </Grid>
              </Grid>   
              )} */}
              {/* weekend end */}
              {/* testing end */}

              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
              >
                {/* <Grid className='input-freebies'>
                  <label className='book-now-label'>FreeBies</label>
                  <Select
                    id='freebies'
                    name='freebies'
                    isDisabled={selectedPremium?.premium_type === '100%'}
                    value={
                      freebiesOption?.find(
                        option => option?.value === values?.freebies
                      ) ?? null
                    }
                    onChange={e => {
                      setFieldValue('freebies', e?.value);
                      // handleChange(e?.value);
                    }}
                    onBlur={handleBlur}
                    placeholder='Have any freebies?'
                    styles={{
                      control: provided => ({
                        ...provided,
                        background: 'white'
                      }),
                      input: provided => ({
                        ...provided,
                        color: 'black',
                        '& input': {
                          height: '30px'
                        }
                      }),
                      ValueContainer: provided => ({
                        ...provided
                      })
                    }}
                    noOptionsMessage={() => "You don't have any freebies"}
                    isSearchable={false}
                    options={freebiesOption}
                  />
                </Grid> */}
              </Grid>

              {/* <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                flexDirection={isMobile ? "column" : "row"}
                height={isMobile ? "100px" : "70px"}
              >
                <Grid className="input-date">
                  <label className="book-now-label">Date </label>
                  <input
                    name="date"
                    className="date-inp"
                    type="date"
                    placeholder="Date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </Grid>
                <Grid className="input-time">
                  <label className="book-now-label">Time</label>
                  <Select
                    id="time"
                    name="time"
                    value={
                      timeOptions.find(
                        (option) => option?.value === values?.time
                      ) ?? null
                    }
                    onChange={(e) => {
                      setFieldValue("time", e?.value || "");
                      // handleChange(e?.value || '');
                    }}
                    onBlur={handleBlur}
                    placeholder="Slots"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        background: "white",
                      }),
                      input: (provided) => ({
                        ...provided,
                        color: "black",
                        "& input": {
                          height: "30px",
                        },
                      }),
                      ValueContainer: (provided) => ({
                        ...provided,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected ? "white" : "black",
                      }),
                    }}
                    required={!true}
                    isSearchable={false}
                    isClearable
                    options={timeOptions}
                  />
                </Grid>
              </Grid> */}






              <Grid
                display={"flex"}
                flexDirection={"row-reverse"}
                width={"100%"}
                height={"50px"}
                mt={isMobile ? "60px" : "18px"}
                mb={"15px"}
              >
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    boxShadow: "0px 2.5 9 0px rgba(0, 0, 0, 0.25)",
                    padding: "10px 30px",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "50px",
                    fontSize: "18px",
                    borderColor: "white",
                    width: "100%",
                    "&:hover": {
                      borderColor: "white",
                    },
                  }}
                  onClick={disablevariable}
                >
                  Save Details/Add Person
                </Button>
              </Grid>



              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                mb={"15px"}
                flexDirection={isMobile ? "column" : "row"}
                height={isMobile ? "100px" : "70px"}
              >
                <Grid className="input-date">
                  <label className="book-now-label">Date </label>
                  <input
                    name="date"
                    className="date-inp"
                    type="date"
                    placeholder="Date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </Grid>
                <Grid className="input-time">
                  <label className="book-now-label">Time</label>
                  <Select
                    id="time"
                    name="time"
                    value={
                      timeOptions.find(
                        (option) => option?.value === values?.time
                      ) ?? null
                    }
                    onChange={(e) => {
                      setIsTimeSelected(!!e);
                      setFieldValue("time", e?.value || "");
                      // handleChange(e?.value || '');
                    }}
                    onBlur={handleBlur}
                    placeholder="Slots"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        background: "white",
                      }),
                      input: (provided) => ({
                        ...provided,
                        color: "black",
                        "& input": {
                          height: "30px",
                        },
                      }),
                      ValueContainer: (provided) => ({
                        ...provided,
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected ? "white" : "black",
                      }),

                    }}
                    required={true}
                    isSearchable={false}
                    isClearable
                    options={timeOptions}
                  // isDisabled={disablevar}
                  />
                </Grid>
              </Grid>




              <Grid width={"100%"} mb={"15px"} gap={"0px"} className="max-md:mt-[60px]">
                <label className="book-now-label">Promo Code</label>
                <TextField
                  fullWidth
                  sx={{
                    background: "white",
                    borderRadius: "5px",
                    mt: "5px",
                    zIndex: 0,
                    "&:hover": {
                      "& fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                    },
                  }}
                  placeholder="Have a promo code?"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={() => getDiscountUsingCoupon()}>
                          Apply
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    sx: {
                      border: "none !important",
                      zIndex: "0 !important",
                    },
                  }}
                />
                {!!couponDiscount.message && (
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "12px",
                      mt: "5px",
                    }}
                  >
                    {couponDiscount.message}
                  </Typography>
                )}
                {!!couponDiscount.discount && (
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: "12px",
                      mt: "5px",
                    }}
                  >
                    Promo code applied!!
                  </Typography>
                )}
              </Grid> */}



<Grid width={"100%"} mb={"15px"} gap={"0px"}>
      <label className="book-now-label">Promo Code</label>
      <Autocomplete
        freeSolo
        options={promoCodeOptions}
        value={code}
        onChange={(event, newValue) => {
          setCode(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            sx={{
              background: "white",
              borderRadius: "5px",
              mt: "5px",
              zIndex: 0,
              "&:hover": {
                "& fieldset": {
                  borderColor: "rgba(0, 0, 0, 0.23)",
                },
              },
            }}
            placeholder="Have a promo code?"
            onChange={(e) => setCode(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={() => getDiscountUsingCoupon()}>
                    Apply
                  </Button>
                </InputAdornment>
              ),
            }}
            inputProps={{
              ...params.inputProps,
              sx: {
                border: "none !important",
                zIndex: "0 !important",
              },
            }}
          />
        )}
      />
      {!!couponDiscount.message && (
        <Typography
          sx={{
            color: "red",
            fontSize: "12px",
            mt: "5px",
          }}
        >
          {couponDiscount.message}
        </Typography>
      )}
      {!!couponDiscount.discount && (
        <Typography
          sx={{
            color: "green",
            fontSize: "12px",
            mt: "5px",
          }}
        >
          Promo code applied!!
        </Typography>
      )}
    </Grid>

              <Grid
                className="pricing-card"
                padding={"15px 30px"}
                marginBottom={"25px"}
                borderRadius={"5px"}
              >
                <Typography
                  fontSize={"18px"}
                  fontWeight={"500"}
                  fontFamily={"Saira"}
                  textAlign={"left"}
                  width={"100%"}
                  mb="5px"
                >
                  Price Summary
                </Typography>

                <Grid
                  width={'100%'}
                  display={'flex'}
                  gap='5px'
                  alignItems={'center'}
                  mb='10px'
                >
                  <Checkbox
                    sx={{
                      p: '0px',
                      '&.Mui-checked': {
                        color: 'black'
                      },
                      position: 'absolute',
                      overflow: 'hidden',
                      clip: 'rect(0 0 0 0)',
                      height: '1px',
                      width: '1px',
                      margin: '-1px',
                      padding: '0',
                      border: '0',
                      whiteSpace: 'nowrap'

                    }}
                    onChange={e => {
                      setUseFuningoMoney(
                        e.target.checked
                          ? Number(values.totalfuningocoinsassigned)
                          : Number(values.totalfuningocoinsassigned)
                      )
                      console.log("usedFuningoMoney", usedFuningoMoney);
                    }
                    }
                    checked={usedFuningoMoney !== 0}
                    id='funingo-money'

                  />
                  {/* <Typography component={'label'} htmlFor='funingo-money'>
                    Use {percent_of_fm_to_use}% of your funingo money.
                    (Available Funingo Money&nbsp;-&nbsp;
                    <Typography component={'span'} fontWeight={'600'}>
                      {userData?.funingo_money || 0})
                    </Typography>
                  </Typography> */}
                </Grid>

                <Grid
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography>Subtotal </Typography>
                  <Typography>Rs {totalPrice} </Typography>


                </Grid>

                <Grid
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Typography>Discount </Typography>
                  <Typography>
                    Rs{" "}
                    {(couponDiscount?.discount || 0) +
                      (totalPremiumDiscount || 0)}{" "}
                  </Typography>
                </Grid>

                {/* {usedFuningoMoney > 0 && (
                  <Grid
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Typography>Funingo Money </Typography>
                    <Typography>Rs {usedFuningoMoney} </Typography>
                  </Grid>
                )} */}

                <Grid
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  paddingBottom={"3px"}
                >
                  <Typography>Gst@18% </Typography>
                  <Typography>Rs {Math.ceil(gstPrice)}</Typography>
                </Grid>

                <hr width={"100%"} />

                <Grid
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  paddingTop={"5px"}
                >
                  <Typography>Total </Typography>
                  <Typography fontWeight={"600"}>
                    Rs{" "}
                    {Math.max(
                      Math.round(
                        (Math.ceil(gstPrice) +
                          totalPrice -
                          (couponDiscount?.discount || 0) -
                          (totalPremiumDiscount || 0) -
                          // (usedFuningoMoney || 0) +
                          Number.EPSILON) *
                        1
                      ) / 1,
                      0
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                display={"flex"}
                flexDirection={"row"}
                width={"100%"}
                justifyContent={"center"}
                mb="30px"
                className="paymentButton"
              >
                <div

                >
                  <PaymentButton
                    values={values}
                    persons={persons}
                    setPersons={setPersons}
                    handleResetBookForm={handleResetBookForm}
                    discount={couponDiscount}
                    usedFuningoMoney={usedFuningoMoney}
                    setShowTicket={setShowTicket}
                  />
                </div>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Booknow;
