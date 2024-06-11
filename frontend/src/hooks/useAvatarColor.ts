// probably an overkill but I just wanted to add a extra hook to showcase my skills in hooks :)

const useAvatarColor = (readingLevel: string): string => {
  const getColorForReadingLevel = (level: string): string => {
    switch (level.toUpperCase()) {
    case 'A':
      return '#FAAD00';
    case 'B':
      return '#4AA088';
    case 'C':
      return '#F76434';
    case 'D':
      return '#FFE6DC';
    case 'E':
      return '#CFFAFA';
    case 'F':
      return '#28B8B8';
    case 'G':
      return '#335C6E';
    case 'H':
      return '#000000';
    case 'I':
      return '#FABD33';
    case 'J':
      return '#5ACCCC';

    default:
      return '#000000';
    }
  };

  return getColorForReadingLevel(readingLevel);
};

export default useAvatarColor;
