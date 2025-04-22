import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { helpMessages } from '../constants/helpMessages';
import { HELP_SEEN_KEY } from '../constants/helpKeys';

export default function useHelp() {
  const [step, setStep] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const seen = await AsyncStorage.getItem(HELP_SEEN_KEY);
      if (seen !== 'true') {
        setStep(0);
        setVisible(true);
      }
    })();
  }, []);

  const handleNext = async () => {
    if (step < helpMessages.length - 1) {
      setStep(step + 1);
    } else {
      await AsyncStorage.setItem(HELP_SEEN_KEY, 'true');
      setStep(-1);
      setVisible(false);
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem(HELP_SEEN_KEY, 'true');
    setStep(-1);
    setVisible(false);
  };

  const triggerManually = () => {
    setStep(0);
    setVisible(true);
  };

  return {
    visible,
    currentText: helpMessages[step],
    isLast: step === helpMessages.length - 1,
    onNext: handleNext,
    onSkip: handleSkip,
    triggerManually,
  };
}