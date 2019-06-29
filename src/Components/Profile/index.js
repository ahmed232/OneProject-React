import React, { useState, useEffect } from "react";

import {
  Profileskills,
  Profilesall,
  Profilestitle,
  Profilestitlespan,
  Profilelist,
  Profileitem,
  Profileitemspan,
  Skills,
  Skillsdesc,
  Bar,
  Barspantit,
  Barspanperc,
  Barparent,
  Barparentspan
} from "./style.js";

import axios from "axios";

const Profile = () => {
  const [myprofile, setProfile] = useState([]);
  useEffect(() => {
    axios.get("../../js/data.json").then(res => {
      setProfile(res.data.profile);
    });
  }, []);

  const allDataProfile = myprofile.map((itemPro , i) => {
    return typeof itemPro.dataPro == "object"
      ? itemPro.dataPro.map(asd => {
          return (
            <div className="container">
              <Profilesall>
                <Profilestitle>
                  <Profilestitlespan>My </Profilestitlespan>Profile
                </Profilestitle>
                <Profilelist key={itemPro.id}>
                  <Profileitem >
                    <Profileitemspan>Name</Profileitemspan>
                    {asd.name}
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Birthday</Profileitemspan>
                    {asd.birthday}
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Address</Profileitemspan>
                    {asd.address}
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Phone</Profileitemspan>
                    {asd.phone}
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Email</Profileitemspan>
                    {asd.email}
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Website</Profileitemspan>
                    <Profileitemspan web>{asd.Website}</Profileitemspan>
                  </Profileitem>
                </Profilelist>
              </Profilesall>
              <Skills>
                <Profilestitle>
                  Some <Profilestitlespan>skills</Profilestitlespan>
                </Profilestitle>
                <Skillsdesc> {itemPro.dis} </Skillsdesc>

                {typeof itemPro.skills == "object"
                  ? itemPro.skills.map((skill) => {
                      return (
                        <Bar key={skill.id}>
                          <Barspantit>{skill.nameskill}</Barspantit>
                          <Barspanperc>{skill.valueskill}</Barspanperc>
                          <Barparent>
                            <Barparentspan sp={skill.ps} />
                          </Barparent>
                        </Bar>
                      );
                    })
                  : null}
              </Skills>
            </div>
          );
        })
      : null;
  });

  return <Profileskills>{allDataProfile}</Profileskills>;
};
export default Profile;
