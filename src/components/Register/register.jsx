function Register(){
    return(
        <div className={style.main}>
        <form className={style.form}>
          <h2 className={style.heading}>Register</h2>
          <section className={style.input}>
            <Input
              placeholder="Firstname"
              className={style.field}
              value={firstName}
              onChange={(inputFName) => {
                setFirstName(inputFName);
              }}
            />
          </section>
          <span className={style.message}> {FirstnameMessage} </span>
          <section className={style.input}>
            <Input
              placeholder="Lastname"
              className={style.field}
              value={lastName}
              onChange={(inputLName) => {
                setlastName(inputLName);
              }}
            />
          </section>
          <span className={style.message}>{LastnameMessage} </span>
          <section className={style.input}>
            <Input
              placeholder="Email"
              className={style.field}
              value={email}
              onChange={(inputEmail) => {
                setEmail(inputEmail);
              }}
            />
          </section>
          <span className={style.message}>{EmailMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Phone Number"
              type="number"
              className={style.field}
              value={phoneNumber}
              onChange={(inputNumber) => {
                setPhoneNumber(inputNumber);
              }}
            />
          </section>
          <span className={style.message}>{PhoneNumberMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Password"
              type="password"
              className={style.field}
              value={password}
              onChange={(inputPassword) => {
                setPassword(inputPassword);
              }}
            />
          </section>
          <span className={style.message}>{PasswordMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Complete Address"
              className={style.field}
              value={address}
              onChange={(inputAddress) => {
                setAddress(inputAddress);
              }}
            />
          </section>
          <span className={style.message}>{AddressMessage}</span>
          <section className={style.input}>
            <Input
              placeholder="Nearby Landmark"
              className={style.field}
              value={landmark}
              onChange={(inputLandmark) => {
                setLandmark(inputLandmark);
              }}
            />
          </section>
          <span className={style.message}>{LandmarkMessage}</span>
          <section className={style.btn}>
            <Button
              text="Register"
              onClick={handleClick}
              className={style.btns}
            />
          </section>
        </form>
      </div>
    )
}

export default Register;