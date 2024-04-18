import Logo from '../../assets/icon.png'

const Footer = () => {
    return (
        <footer className="mt-12 grid gap-4 sm:gap-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-end p-10 bg-base-200 text-base-content">
            <aside className='mb-5 sm:mb-0'>
                <img src={Logo} alt="logo" className='w-14 mb-3' />
                <p className='text-2xl font-semibold italic mb-2'>Farmers Insurance Ltd.</p>
                <p className='text-gray-600'>Your trusted partner for agricultural land, farms, forests, plantations etc.</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <div className='flex flex-col mt-1'>
                    <a className="link link-hover">agricultural lands</a>
                    <a className="link link-hover">Farms</a>
                    <a className="link link-hover">Forests</a>
                    <a className="link link-hover">Plantations</a>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <div className='flex flex-col mt-1'>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </div>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <div className='flex flex-col mt-1'>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;