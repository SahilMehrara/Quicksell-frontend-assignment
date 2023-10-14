import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';
import dropdown from "./assest/dropdown.svg"
import Header from './Header';

export default function File() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [groupBy, setGroupBy] = useState('status');
    const [sortOrder, setSortOrder] = useState('asc');
    const [open, setOpen] = useState(false); 

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
                setTickets(response.data.tickets);
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    const loadViewStateFromLocalStorage = () => {
        const savedGroupBy = localStorage.getItem('groupBy');
        const savedSortOrder = localStorage.getItem('sortOrder');
        if (savedGroupBy) {
            setGroupBy(savedGroupBy);
        }

        if (savedSortOrder) {
            setSortOrder(savedSortOrder);
        }
    };
    useEffect(() => {
        loadViewStateFromLocalStorage();
    }, []);
    // Function to group tickets by status
    const groupTicketsByStatus = () => {
        const groupedTickets = {};

        tickets.forEach((ticket) => {
            const status = ticket.status;

            if (!groupedTickets[status]) {
                groupedTickets[status] = [];
            }

            groupedTickets[status].push(ticket);
        });

        return groupedTickets;
    };

    // Function to group tickets by user name
    const groupTicketsByUser = () => {
        const groupedTickets = {};

        tickets.forEach((ticket) => {
            const userId = ticket.userId;
            const user = users.find((user) => user.id === userId);

            if (user) {
                const userName = user.name;

                if (!groupedTickets[userName]) {
                    groupedTickets[userName] = [];
                }
                groupedTickets[userName].push(ticket);
            }
        });
        return groupedTickets;
    };

    const groupTicketsByPriority = () => {
        const groupedTickets = {};

        tickets.forEach((ticket) => {
            const priority = ticket.priority;

            if (!groupedTickets[priority]) {
                groupedTickets[priority] = [];
            }

            groupedTickets[priority].push(ticket);
        });

        return groupedTickets;
    };

    const getGroupedTickets = () => {
        switch (groupBy) {
            case 'status':
                return groupTicketsByStatus();
            case 'user':
                return groupTicketsByUser();
            case 'priority':
                return groupTicketsByPriority(); // Add this option for priority grouping
            default:
                return {};
        }
    };

    // Handle dropdown change for grouping
    const handleGroupByChange = (event) => {
        setGroupBy(event.target.value);
        localStorage.setItem('groupBy', event.target.value)

    };
    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
        localStorage.setItem('sortOrder', event.target.value);
    };
    const sortTickets = (a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        } else {
            return b.priority - a.priority;
        }
    };

    const groupedTickets = getGroupedTickets();
    return (
        <div>
            <div className='dropdown'>
                <button className='button' onClick={() => setOpen(!open)}>
                    <img className='butimg' src={dropdown} alt="hhh"/>
                    Display</button>

                {open && <div className='c1'>
                    <div className='divv'>
                        <label htmlFor="groupBy">Group By:&nbsp;&nbsp;&nbsp; </label>
                        <select id="groupBy" onChange={handleGroupByChange} value={groupBy}>
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sortOrder">Sort By: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <select id="sortOrder" onChange={handleSortOrderChange} value={sortOrder}>
                            <option value="asc">Title </option>
                            <option value="desc">Priority </option>
                        </select>
                    </div></div>}
                
            </div>
            

            <div className='full'>
            {Object.keys(groupedTickets).map((groupKey) => (
                <div key={groupKey}>
                    {/* <h2 className='first_ele'>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;{groupKey}</h2> */}
                    <Header Value={groupKey} cnt={groupedTickets[groupKey].length } />
                    <ul>
                        {groupedTickets[groupKey].sort(sortTickets).map((ticket) => (
                            <Card title = {ticket} arr = {users} />
                        ))}

                    </ul>
                </div>
            ))}
            </div>
        </div>
    );
}