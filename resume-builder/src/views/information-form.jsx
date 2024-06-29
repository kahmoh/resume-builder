import {useState} from "react";
import Panel from "../components/panel.jsx";

export default function InformationForm() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Input information</h2>
            <Panel
                title="Personal Information"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
            </Panel>
            <Panel
                title="Experience"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
            </Panel>
            <Panel
                title="Projects"
                isActive={activeIndex === 2}
                onShow={() => setActiveIndex(2)}
            >
            </Panel>
            <Panel
                title="Education"
                isActive={activeIndex === 3}
                onShow={() => setActiveIndex(3)}
            >
            </Panel>
        </>
    );
}
