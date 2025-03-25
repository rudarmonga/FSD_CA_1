import React from "react";

function TeamMemberCard ({name , jobTitle}) {
   return (
    <>
    <h3>Hy! {name} </h3>
    <h5>{name} is our {jobTitle}</h5>
    </>
   )
}

export default TeamMemberCard;