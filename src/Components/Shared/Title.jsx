import PropTypes from "prop-types";

function Title({ title }) {
    return (
        <>
            <div className="bg-[#c3096f] text-gray-200 font-bold py-3 md:py-5 text-center text-xl md:text-2xl lg:text-3xl mb-4">
                <h1>{title}</h1>
            </div>
        </>
    );
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
