import React, { useState } from "react";

import "./Form.css";
function Form() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [address, setAddress] = useState("");
    let [birthdate, setBirthdate] = useState("");
    let [gender, setGender] = useState("");
    let [skill, setSkill] = useState([]);

    function handleSubmit() {
        alert(
            `
            Profil :
            Name : ${name}
            Email :${email}
            Password : ${password} 
            Address : ${address}
            Birthdate : ${birthdate}
            Gender : ${gender}
            Skills: ${skill}`
        );
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="fullname"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    value={name}
                />

                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                />

                <textarea
                    name="address"
                    cols="30"
                    rows="10"
                    onChange={(event) => {
                        setAddress(event.target.value);
                    }}
                    value={address}
                    placeholder="address"
                ></textarea>

                <input
                    type="date"
                    name="birthdate"
                    placeholder="birthdate"
                    onChange={(event) => {
                        setBirthdate(event.target.value);
                    }}
                    value={birthdate}
                />

                <div
                    onChange={(event) => {
                        setGender(event.target.value);
                    }}
                >
                    <input type="radio" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="skill"
                        value="coding"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skills) =>
                                            skills !== event.target.value
                                    )
                                );
                            }
                        }}
                    />
                    <label htmlFor="coding">Coding</label>
                    <input
                        type="checkbox"
                        name="skill"
                        value="design"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skills) =>
                                            skills !== event.target.value
                                    )
                                );
                            }
                        }}
                    />
                    <label htmlFor="design">Design</label>
                    <input
                        type="checkbox"
                        name="skill"
                        onChange={(event) => {
                            if (event.target.checked) {
                                setSkill([...skill, event.target.value]);
                            } else {
                                setSkill(
                                    skill.filter(
                                        (skills) =>
                                            skills !== event.target.value
                                    )
                                );
                            }
                        }}
                        value="gaming"
                    />
                    <label htmlFor="gaming">Gaming</label>
                </div>

                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;
