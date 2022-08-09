// export const RandomUserProvider = props => {

//     const [person, setPerson] = useState(null);
    
//     useEffect(async () => {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();
//     const [item] = data.results;
//     setPerson(item);
// }, [])