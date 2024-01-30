import Link from "next/link";

export default function MadeByRollinBoat() {
    return (
        <>
            <section style={{
                height: "7vh",
                backgroundColor: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Open Sans', serif",
                fontWeight: "400",
                fontSize: ".8rem"
            }}>
                <p style={{color: "black"}}>Powered & Developed By <Link
                    style={{color: "#3C325C", fontWeight: "900", textDecoration: "underline"}}
                    target="_blank"
                    href={"https://rollinboat.com/"}>Rollin&apos; Boat</Link>
                </p>
            </section>
        </>
    )
}