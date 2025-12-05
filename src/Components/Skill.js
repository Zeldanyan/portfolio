import "./Skill.scss";

const Skill = (skill) => {
    //skill.name
    //skill.logo
    return (
        <div className="Skill">
            <img src={skill.logo} alt="" />
            <p>{skill.name}</p>
        </div>
    );
};

export default Skill;