
const Scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    console.log("asdasdasd")
}

export default Scroll;