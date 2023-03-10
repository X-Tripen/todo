interface ButtonProps {
	children?: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	primary?: boolean;
	done?: boolean;
	deletes?: boolean;
	reload?: boolean;
	themeSwitch?: boolean;
	downBtn?: boolean;
}

function Button({
	children,
	type,
	onClick,
	primary,
	done,
	deletes,
	reload,
	themeSwitch,
	downBtn,
}: ButtonProps) {
	let classes =
		"leading-5 py-1 px-3 md:px-4 md:py-2 rounded hover:scale-105 duration-200 uppercase";
	if (primary) {
		classes +=
			" text-sm sm:text-base font-medium sm:font-semibold text-slate-200 bg-gradient-to-r from-indigo-500 to-rose-500 dark:from-violet-600 dark:to-cyan-600 flex-none ";
	} else if (done) {
		classes =
			"flex text-[1.6251rem] hover:scale-110 duration-200 text-black font-bold rounded-full bg-emerald-500/90 dark:bg-emerald-500/70 hover:bg-emerald-600 dark:hover:bg-emerald-700 p-[4px] text-slate-200";
	} else if (deletes) {
		classes =
			"flex  text-3xl hover:scale-110 duration-200 text-black font-bold rounded-full  bg-rose-500/90 dark:bg-rose-500/70 hover:bg-rose-600 dark:hover:bg-rose-700 text-slate-200 p-[2px]";
	} else if (reload) {
		classes =
			"flex  text-2xl hover:scale-110 duration-200 text-black font-bold rounded-full  bg-stone-400 dark:bg-slate-700 hover:bg-stone-500 dark:hover:bg-slate-600 text-slate-200 p-[4.98px]";
	} else if (themeSwitch) {
		classes =
			"p-2.5 text-2xl rounded-full border-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800 border-gray-700 dark:border-slate-400 text-gray-700 dark:text-slate-400 duration-200 relative z-50";
	} else if (downBtn) {
		classes =
			"text-4xl rounded-full p-1 hover:bg-gray-200 text-stone-600 dark:text-slate-300 dark:hover:bg-slate-700 duration-300";
	}

	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;
