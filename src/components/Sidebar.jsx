import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ darkTheme }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`sidebar${collapsed ? " collapsed" : ""}${darkTheme ? " dark-theme" : ""}`}>
            <button
                className="sidebar-toggle-btn"
                onClick={() => setCollapsed((c) => !c)}
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                {collapsed ? "»" : "«"}
            </button>
            {!collapsed && (
                <>
                    <h3>Notes Topics</h3>
                    <ul>
                        <li>
                            <Link to="/transformer-paper" className="sidebar-link">Transformer Paper</Link>
                        </li>
                        <li>
                            <Link to="/unet-paper" className="sidebar-link">Unet Paper</Link>
                        </li>
                        <li>
                            <Link to="/stable-diffusion" className="sidebar-link">Stable Diffusion</Link>
                        </li>
                    </ul>
                </>
            )}
        </aside>
    );
}

export default Sidebar;
