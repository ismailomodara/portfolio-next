import Link from 'next/link';

export default function FirstPost(props) {
    console.log(props)
    return (
        <>
            <h1>First Experience</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}