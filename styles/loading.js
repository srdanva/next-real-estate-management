const styles = {
    container: {
        position: "absolute",
        height: "500px",
        width: "350px",
        margin: "auto",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    building: {
        position: "absolute",
        backgroundColor: "coral",
        height: "200px",
        width: "120px",
        left: "115px",
        top: "100px",
        border: "#003366 solid 3px",
        animation: '$squeeze 1s ease-in-out 0s infinite alternate',
        '&:before': {
            content: "''",
            position: "absolute",
            backgroundColor: "lightgrey",
            width: "130px",
            height: "20px",
            left: "-8px",
            zIndex: 1,
            border: "#003366 solid 3px",
            top: "-10px",
            transform: "perspective(10px) rotateX(2deg)",
            boxShadow: "0 8px 6px -6px rgba(0, 0, 0, 0.575)"
        },
    },
    '@keyframes squeeze': {
        from: {
            transform: 'scaleY(1.2)',
        },
        to: {
            transform: 'scaleX(1.4)',
        },
    },
    window: {
        position: "absolute",
        width: "20px",
        height: "40px",
        backgroundColor: "#dbf7ff",
        top: "30px",
        left: "13px",
        border: "#003366 solid 2px",
        borderBottom: "#003366 solid 4px",
        boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75)",
        '&:before': {
            content: "''",
            top: "44px",
            left: "-2px",
            position: "absolute",
            width: "24px",
            height: "2px",
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        },
        '&:nth-of-type(2)': { left: "48px" },
        '&:nth-of-type(3)': { left: "83px" },
        '&:nth-of-type(4)': { top: "90px", left: "13px" },
        '&:nth-of-type(5)': { top: "90px", left: "83px" },
    },
    windowAlt: {
        position: "absolute",
        width: "20px",
        height: "40px",
        backgroundColor: "#dbf7ff",
        top: "30px",
        left: "13px",
        border: "#003366 solid 2px",
        borderBottom: "#003366 solid 4px",
        boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75)",
        '&:before': {
            content: "''",
            position: "absolute",
            width: "20px",
            height: "39px",
            backgroundColor: "#b5aeae",
            borderBottom: "#003366 solid 2px",
            zIndex: 100,
            boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.75)",
            animation: "$move-blind 2s forwards",
            animationDelay: "0.5s"
        },
        '&:after': {
            content: "''",
            top: "44px",
            left: "-2px",
            position: "absolute",
            width: "24px",
            height: "2px",
            backgroundColor: "rgba(0, 0, 0, 0.3)"
        },
        '&:nth-of-type(1)': { top: "90px", left: "48px" },
    },
    "@keyframes move-blind": { "100%": { height: "16px" } },
    streak: {
        position: "absolute",
        backgroundColor: "#a7ccd6",
        width: "3px",
        height: "20px",
        borderRadius: "50%",
        transform: "rotate(16deg)",
        left: "6px",
        top: "6px",
        '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#a7ccd6",
            width: "3px",
            height: "10px",
            borderRadius: "50%",
            left: "6px",
            top: "2px"
        },
        '&:before': {
            content: "''",
            position: "absolute",
            backgroundColor: "#a7ccd6",
            width: "3px",
            height: "10px",
            borderRadius: "50%",
            left: "6px",
            top: "19px"
        },
    },
    pullie: {
        position: "absolute",
        backgroundColor: "#003366",
        height: "15px",
        width: "2px",
        top: "29px",
        left: "9px",
        opacity: 0,
        animation: "$move-pullie 2s forwards",
        animationDelay: "0.5s",
        '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#003366",
            height: "4px",
            width: "4px",
            borderRadius: "50%",
            top: "14px",
            left: "-1px",
            opacity: 0,
            animation: "$move-pullie-alt 2s forwards",
            animationDelay: "0.5s"
        },
    },
    "@keyframes move-pullie": { "100%": { top: "18px", opacity: 1 } },
    "@keyframes move-pullie-alt": { "100%": { top: "12px", opacity: 1 } },
    door: {
        position: "absolute",
        backgroundColor: "white",
        width: "40px",
        height: "50px",
        bottom: "0",
        left: "38px",
        border: "#003366 solid 3px",
        borderBottom: "none",
        boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75)",
        '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#003366",
            width: "28px",
            height: "2px",
            top: "35px",
            left: "6px"
        },
    },
    doorWindow: {
        position: "absolute",
        backgroundColor: "#dbf7ff",
        height: "25px",
        width: "11px",
        left: "3px",
        border: "#003366 solid 2px",
        top: "3px",
        boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75)",
        '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#dbf7ff",
            height: "25px",
            width: "11px",
            left: "17px",
            border: "#003366 solid 2px",
            top: "-2px",
            boxShadow: "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75)"
        },
    },
    box: {
        position: "absolute",
        width: "12px",
        height: "4px",
        top: "40px",
        left: "3px",
        border: "#003366 solid 2px",
        boxShadow: "inset 0px 0px 1px 0px rgba(0, 0, 0, 0.75)",
        '&:after': {
            content: "''",
            position: "absolute",
            width: "12px",
            height: "4px",
            top: "-2px",
            left: "16px",
            border: "#003366 solid 2px",
            boxShadow: "inset 0px 0px 1px 0px rgba(0, 0, 0, 0.75)"
        },
    },
};

export default styles;