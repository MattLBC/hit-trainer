function getSecondsFromMMSS(value) {
    const [str1, str2] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);

    if (!isNaN(val1) && isNaN(val2)) {
      return val1;
    }

    if (!isNaN(val1) && !isNaN(val2)) {
      return val1 * 60 + val2;
    }
    return 0;
  };

function toMMSS(secs) {
    const secNum = parseInt(secs.toString(), 10);
    const minutes = Math.floor(secNum / 60);
    const seconds = secNum % 60;

    return [minutes, seconds]
        .map((val) => (val < 10 ? `0${val}` : val))
        .filter((val, index) => val !== "00" || index > 0)
        .join(":")
        .replace(/^0/, "");
};

export {getSecondsFromMMSS, toMMSS}