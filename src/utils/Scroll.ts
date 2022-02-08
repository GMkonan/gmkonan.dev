
const Scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default Scroll;