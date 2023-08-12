import React, {useCallback} from 'react';
import PianoKey from '../components/pianoKey';

type Props = {
  note: string;
};

function PianoKeyContainer(props: Props) {
  const noteIsFlat = useCallback((note: string) => {
    return note.length > 1;
  }, []);

  const checkBorder = useCallback((note: string) => {
    if (note === 'f') {
      return true;
    }
    return false;
  }, []);

  //   const keyIsPressed = useCallback((note: string, pressedKeys: string[]) => {
  //     return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  //   }, []);

  const flatNote = noteIsFlat(props.note);
  const border = checkBorder(props.note);
  //   const pressedKey = keyIsPressed(props.note, props.pressedKeys);

  return (
    <PianoKey flatNote={flatNote} note={props.note} otherBorder={border} />
  );
}

export default PianoKeyContainer;
