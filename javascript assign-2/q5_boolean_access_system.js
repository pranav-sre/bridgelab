function checkAccess(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

  if (isSecure && !isUnsafe) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

checkAccess(true, true, true, true);
checkAccess(true, true, false, true);
checkAccess(false, true, true, true);
checkAccess(true, false, true, true);
checkAccess(true, true, true, false);
