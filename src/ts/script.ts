const burgerBtn = document.querySelector<HTMLElement>(".mobile-btn");
const mobileNavbar = document.querySelector<HTMLElement>(".mobile-navbar");
const closeNavbarBtn = document.querySelector(".hide-navbar-btn");
const mobileLinks = document.querySelectorAll(".mobile-navbar li a");

const handleMobileNavBar = () => {
	mobileNavbar?.classList.toggle("delay-300");
	mobileNavbar?.classList.toggle("translate-x-full");

	const lineTop = burgerBtn?.querySelector(".line-top");
	const lineBottom = burgerBtn?.querySelector(".line-bottom");

	lineTop?.classList.toggle("w-full");
	lineBottom?.classList.toggle("w-full");
};

burgerBtn?.addEventListener("click", handleMobileNavBar);
closeNavbarBtn?.addEventListener("click", handleMobileNavBar);
mobileLinks.forEach((link) =>
	link.addEventListener("click", handleMobileNavBar),
);
