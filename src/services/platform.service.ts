const iOS =
    typeof window !== 'undefined' &&
    window.navigator.platform &&
    /iPad|iPhone|iPod/.test(navigator.platform);

export default {
    iOS,
};
