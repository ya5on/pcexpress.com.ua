export default function toFix(value){
  value = Math.ceil(value);
  return value.toFixed(0) + ' грн.'
}
