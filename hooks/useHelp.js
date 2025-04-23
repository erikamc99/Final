import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HELP_SEEN_KEY } from '../constants/helpKeys';
import { helpMessages } from '../constants/helpMessages';

export default function useHelp(screenKey = 'Default') {
  const [step, setStep] = useState(-1);
  const [visible, setVisible] = useState(false);

  const messages = helpMessages[screenKey] || []; 

  useEffect(() => {
    (async () => {
      const seen = await AsyncStorage.getItem(`${HELP_SEEN_KEY}_${screenKey}`);
      if (seen !== 'true' && messages.length > 0) {
        setStep(0);
        setVisible(true);
      }
    })();
  }, [screenKey, messages]);

  const handleNext = async () => {
    if (step < messages.length - 1) {
      setStep(step + 1);
    } else {
      await AsyncStorage.setItem(`${HELP_SEEN_KEY}_${screenKey}`, 'true');
      setStep(-1);
      setVisible(false);
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem(`${HELP_SEEN_KEY}_${screenKey}`, 'true');
    setStep(-1);
    setVisible(false);
  };

  const triggerManually = () => {
    if (messages.length > 0) {
      setStep(0);
      setVisible(true);
    }
  };

  return {
    visible,
    currentText: messages[step],
    isLast: step === messages.length - 1,
    onNext: handleNext,
    onSkip: handleSkip,
    triggerManually,
  };
}