const RadioButton = ({users, onUsersChange}) =>{
    const byName = () =>{
        console.log(users);
        const newUsers = JSON.parse(JSON.stringify(users)).sort((a, b) => a.name.localeCompare(b.name));

        onUsersChange(newUsers);
    };

    const byAge = () => {
        console.log(users);

        const newUsers = JSON.parse(JSON.stringify(users)).sort((a, b) => b.age - a.age);

        onUsersChange(newUsers);
    };

    return (
        <div>
            <input type="radio" name="sort" onChange={byName}></input>
            <label>Sort by name</label> <br></br>
            <input type="radio" name="sort" onChange={byAge}></input>
            <label>Sort by age</label> 
        </div>
    );
};

export default RadioButton;