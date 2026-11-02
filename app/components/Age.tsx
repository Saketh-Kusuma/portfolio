const Age = () => {
 const dob = new Date(2005, 5, 27);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() &&
      today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return (
    <>{age},</>
  )
}

export default Age;