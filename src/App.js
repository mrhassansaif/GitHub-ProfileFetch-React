import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";


function App() {
    const [userN, setuserN] = useState([])

    const dummyUserData = {
      name: "John Doe",
      company: "ABC Company",
      bio: "A passionate developer",
      followers: 100,
      following: 50,
      public_repos: 20,
      avatar_url: "https://via.placeholder.com/150",
    };

    const [userData, setuserData] = useState(dummyUserData)


    const userEvent = () => {
        let userName = document.getElementById("UserName").value 
        setuserN(userName)
        console.log(userN)
    }

    useEffect(() => {
        axios.get("https://api.github.com/users/" + userN).then((res) => {
            console.log(res.data);
            setuserData(res.data)
            console.log(userData)
        });
    }, [userN]);

    return (
        <>
            <div className="profile-card-ctr">
                <input className="profile-card__button button--blue js-message-btn" placeholder="mrhassansaif" id="UserName"  />
                <button className="profile-card__button button--blue js-message-btn" onClick={userEvent}>fetch</button>

            </div>
            <div className="wrapper" >


                <div className="profile-card js-profile-card">
                    <div className="profile-card__img">
                        <img src={userData.avatar_url} alt="profile card" />
                    </div>
                    <div className="profile-card__cnt js-profile-cnt">
                        <div className="profile-card__name">{userData.name}</div>
                        <div className="profile-card__txt">Company: <strong>{userData.company}</strong></div>
                        <div className="profile-card__txt">Bio: <strong>{userData.bio}</strong></div>
                        <div className="profile-card-inf">
                            <div className="profile-card-inf__item">
                                <div className="profile-card-inf__title">{userData.followers}</div>
                                <div className="profile-card-inf__txt">Followers</div>
                            </div>
                            <div className="profile-card-inf__item">
                                <div className="profile-card-inf__title">{userData.following}</div>
                                <div className="profile-card-inf__txt">Following</div>
                            </div>
                            <div className="profile-card-inf__item">
                                <div className="profile-card-inf__title">{userData.public_repos}</div>
                                <div className="profile-card-inf__txt">Public
                                    Repositories</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default App;