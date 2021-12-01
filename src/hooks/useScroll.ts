
const useScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default useScroll;