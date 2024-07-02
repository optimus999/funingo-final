import React, { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  Grid,
  Typography,
  Box,
  Button,
  TextField
} from '@mui/material';
import { downloadImage, exportAsImage } from '../../utils';
import axios from 'axios';
import { apiUrl } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { saveTicketRiskImage } from '../../actions/ticket';

const ConfirmationModal = ({ open, onClose, handlePurchase }) => {
  const [name, setName] = useState('');
  const ref = useRef(null);
  const { token } = useSelector(state => state.userSlice);

  const saveImage = async () => {
    if (ref?.current) {
      try {
        const image = await exportAsImage(ref.current, 'Confirmation');

        const binaryString = atob(image.split(',')[1]);

        // Step 2: Create a Blob
        const blobArray = [];
        for (let i = 0; i < binaryString.length; i++) {
          blobArray.push(binaryString.charCodeAt(i));
        }
        const imageBlob = new Blob([new Uint8Array(blobArray)], {
          type: 'image/png'
        });

        onClose();
        handlePurchase(short_id => {
          saveTicketRiskImage({ imageBlob, short_id, token });
        });
      } catch (err) {
        alert(err);
        console.log("err from modal.js",err);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='lg'>
      <Grid width={'700px'} p='20px' ref={ref}>
        <Typography>
          Funingo Adventure Arena - Customer Waiver, Release of Liability, Indemnity, and Assumption of Risk Agreement
          In consideration of being permitted by FUNINGO ADVENTURE PARK, owned and operated by “FUNINGO
          ADVENTURE PARK”, to participate in its activities and to use its equipment and facilities, now and in the
          future, I hereby agree to release, indemnify, and forever discharge Funingo Adventure Arena, its owners,
          members, shareholders, officers, directors, managers, partners, employees, volunteers, manufacturers,
          participants, lessors, and successors on behalf of myself, my spouse, my child(ren), my parent(s), my heir(s),
          assign(s), personal representative(s), and estate as follows:

          <b><u>NATURE OF THE ACTIVITIES</u></b>
          Funingo Adventure Arena offers various adventure and amusement activities, including but not limited to,
          rock climbing, sky cycling, giant swing, Gyro Ride, Rocket Ejector, Cycle 360, Rope Course, Paintbal field,
          trampoline activities, obstacle courses, and other outdoor and indoor recreational activities. I agree that
          there are inherent risks associated with engaging in these activities.

          <b><u>TYPES AND ASSUMPTION OF RISKS</u></b>

          I acknowledge that the risks include, but are not limited to, cuts, bruises, muscular strain, twisted or sprained
          ankles, knees, shoulders, or wrists, burns, dirt or other objects in the eye, concussions, broken bones, bodily
          injuries, landing incorrectly, overexertion, equipment failure, collisions with other participants, and falling from
          heights. There are additional risks and hazards beyond those mentioned above, as well as unknowable and
          unpredictable dangers. Despite the hazards and safety precautions taken by Funingo Adventure Arena, I
          acknowledge that there is always a chance of harm. I am aware of the demands of the activities in relation to
          my physical condition and skill level. I affirm that participation in the activities is voluntary and, with an
          understanding of the risks and potential injuries, I accept all risks inherent with the activities and access to

          the premises. I assume all responsibility for my own conduct, safety, and welfare and acknowledge the hazards
          connected with these activities at Funingo Adventure Arena.

          <b><u>CONSUMPTION OF TOXIC SUBSTANCES</u></b>

          I confirm that I have not consumed any alcohol, tobacco, drugs, or participated in any other activity which
          might impair my ability to safely participate in the activities prior to or during my participation in any of the
          activities at Funingo Adventure Arena.

          <b><u>RELEASE AND INDEMNITY</u></b>

          On behalf of myself, my child(ren), my spouse, my parents, executors, and representatives, I release and agree
          not to sue, and shall indemnify Funingo Adventure Arena, its owners, partners, officers, shareholders,
          members, managers, agents, employees, contractors, representatives, heirs, assigns, and volunteers from and
          against all liability for my (or my child's) losses, damages, claims, demands, actions of any kind, including my
          traveling to and from this activity, costs, death, accident, disability, personal injury, property damage, property
          theft, and property loss due to my active or passive participation in the activities. I agree not to carry weapons
          of any kind, professional photography equipment or cameras with detachable lenses (without permission),
          illegal and flammable substances, fireworks, pets, sharp objects, or outside food into the arena, which could
          cause damage and harm to the setup and premises of Funingo Adventure Arena. I am completely liable for any
          recovery costs if I cause any damage.
          
          <b><u>HEALTH DECLARATION</u></b>
          I confirm that I have not experienced any flu-like or common cold symptoms in the past 14 days and do not
          have any medical conditions related to the heart and respiratory system.

          <b><u>SAFETY RULES AND REGULATIONS</u></b>
          I agree to abide by all safety rules and regulations established by Funingo Adventure Arena. I understand that
          failure to follow these rules may result in expulsion from the facility without a refund.

          <b><u>SUPERVISION OF MINORS</u></b>

          If lam signing on behalf of a minor (under the age of 18), I agree to supervise the minor at all times during their
          participation in activities at Funingo Adventure Arena. I acknowledge that I am responsible for the minor’s
          safety and actions.

          <b><u>MEDICAL TREATMENT</u></b>

          In the event of an injury or medical emergency, I authorize Funingo Adventure Arena to provide or arrange for
          medical treatment. I understand and agree that Funingo Adventure Arena assumes no responsibility for any
          medical expenses, injury, or damage suffered in connection with the use of the facilities or participation in the
          activities.

          <b><u>PHOTOGRAPHY AND VIDEO RELEASE</u></b>
          I consent to the use of any photographs, videos, or recordings taken of me (or my child) while at Funingo
          Adventure Arena for promotional and marketing purposes, without compensation.

          <b><u>GOVERNING LAW</u></b>
          This agreement shall be governed by and interpreted in accordance with the laws of the jurisdiction of the
          High Court of Jabalpur.

          <b><u>SEVERABILITY</u></b>
          If any provision of this agreement is found to be unenforceable or invalid, the remaining provisions shall remain
          in full force and effect.
          I have read and understood all the above terms and conditions. I agree to be bound by these terms and
          conditions on behalf of myself, my child(ren), my spouse, my parent(s), executor(s), and personal
          representative(s).

          DATE:-
          NAME:-
          PHONE NO:-
          BIRTH DATE:-
          CITY:-
          PIN CODE:-
        </Typography>
        <Box
          sx={{
            my: '20px'
          }}
        >
          <Typography fontWeight='600'>Your digital signature</Typography>
          <TextField
            fullWidth
            placeholder='Type in your name'
            onChange={e => setName(e.target.value)}
            value={name}
            sx={{
              '& fieldset': {
                border: 'none'
              }
            }}
            inputProps={{
              sx: {
                padding: '5px'
              }
            }}
          />
        </Box>
        <Button
          // onClick={() => handlePurchase()}
          variant='contained'
          fullWidth
          disabled={!name.length}
          onClick={() => saveImage()}
        >
          Buy Now
        </Button>
      </Grid>
    </Dialog>
  );
};

export default ConfirmationModal;
