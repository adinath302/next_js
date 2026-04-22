import Link from "next/link";
const page = async () => {
    return (
        <>
            <div className="common_heading">
                about page
            </div>
            <button>
                <Link href="/">Home</Link>
            </button>
        </>
    );
};

export default page;
