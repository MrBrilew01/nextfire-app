import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import Image from 'next/image';

function Navbar() {

    const { user, username } = useContext(UserContext)

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>FEED</button>
                    </Link>
                </li>

                {/* user is signed in*/}
                {username && (
                    <>
                        <li className='push-left'>
                            <Link href="/admin">
                                <button className='btn-blue'>Write Posts</button>
                            </Link>
                        </li>
                        <li className='push-left'>
                            <Link href={`/${username}`}>
                                <Image src={user?.photoURL} alt=""/>
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed in OR hasnt created username */}
                {!username && (
                    <li className='push-left'>
                        <Link href="/enter">
                            <button className='btn-blue'>Log in</button>
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar