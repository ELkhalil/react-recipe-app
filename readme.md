a recipe app in react built on top of the famous ready made API
of https://spoonacular.com/ i am just practicing the different hooks of react and it's uses...

i learned about the useState and useEffect hooks and it's use cases.

syntax of useEffect hook:
useEffect(1, 2);
1 => is a callBack function that will be executed if 2.
2 => is a dependency list witch the useEffect depend on to trigger 1.
like this :
useEffect(() =>{}, []);
something to note: at the very first time of calling the app
the useEffect call back get executed directly...

---

something i learned: the children is automatically passed to it's parent you only need to access the {children} prop.
check the Container component and it's child FoodList
<Container>
<FoodList foodData={foodData}></FoodList>
</Container>


