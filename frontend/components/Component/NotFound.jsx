import { Link } from "react-router-dom";
const NotFound=()=>{
    return(
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
            fontFamily: "system-ui, sans-serif",
        }}
        >
        <div
            style={{
            textAlign: "center",
            maxWidth: "500px",
            width: "100%",
            }}
        >
            <h1
            style={{
                fontSize: "clamp(4rem, 15vw, 8rem)",
                margin: 0,
                color: "#000",
                fontWeight: "800",
                lineHeight: 1,
            }}
            >
            404
            </h1>

            <h2
            style={{
                margin: "1rem 0 0.75rem",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                color: "#1f2937",
            }}
            >
            Page Not Found
            </h2>

            <p
            style={{
                color: "#6b7280",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                lineHeight: 1.7,
                marginBottom: "2rem",
            }}
            >
            Sorry, the page you're looking for doesn't exist or may have been
            moved.
            </p>

            <Link
            to="/"
            style={{
                display: "inline-block",
                padding: "0.9rem 2rem",
                background: "#000",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "600",
                transition: "all 0.3s ease",
            }}
            >
            Go Home
            </Link>
        </div>
        </div>
    )
}
export default NotFound;