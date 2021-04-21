export function converDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60
  
  // se der 8segundos, ele acrescenta 0 na frente do 8 para ter 2 digitos
  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')
  return timeString;
}