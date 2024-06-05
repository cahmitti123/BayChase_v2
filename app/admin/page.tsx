"use client"
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { unparse } from 'papaparse';

const Page = () => {
  const [reservations, setReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationsPerPage] = useState(6); // Change this number to adjust the number of reservations per page
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const correctPassword = 'test'; // Set your password here

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('api/Reservation');
        if (response.ok) {
          const data = await response.json();
          setReservations(data.reservations);
        } else {
          console.error('Failed to fetch reservations:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    if (authenticated) {
      fetchReservations();
    }
  }, [authenticated]);

  // Get current reservations
  const indexOfLastReservation = currentPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const currentReservations = reservations.slice(indexOfFirstReservation, indexOfLastReservation);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Export reservations to CSV
  const exportToCSV = () => {
    const formattedData = reservations.map((reservation) => ({
      FullName: reservation.FullName,
      PhoneNumber: reservation.PhoneNumber,
      City: reservation.City,
      Country: reservation.Country,
      Email: reservation.Email,
      SurfedBefore: reservation.SurfedBefore,
      Package: reservation.Package,
      Photographer: reservation.Photographer ? 'Yes' : 'No',
      Date: new Date(reservation.createdAt).toLocaleString()
    }));

    const csv = unparse(formattedData, { header: true });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'reservations.csv');
  };

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Enter Password</h2>
          <input 
            type="password" 
            className="border border-gray-300 p-2 mb-4 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={handleLogin} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Reservations</h1>
      <div className="flex justify-end mb-4">
        <button 
          onClick={exportToCSV} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Export to CSV
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentReservations.length > 0 ? (
          currentReservations.map((reservation) => (
            <div key={reservation._id} className="bg-white shadow-lg cursor-pointer rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-3">{reservation.FullName}</h2>
              <p className="text-gray-700 mb-2"><strong>Phone Number:</strong> {reservation.PhoneNumber}</p>
              <p className="text-gray-700 mb-2"><strong>City:</strong> {reservation.City}</p>
              <p className="text-gray-700 mb-2"><strong>Country:</strong> {reservation.Country}</p>
              <p className="text-gray-700 mb-2"><strong>Email:</strong> {reservation.Email}</p>
              <p className="text-gray-700 mb-2"><strong>Surfed Before:</strong> {reservation.SurfedBefore}</p>
              <p className="text-gray-700 mb-2"><strong>Package:</strong> {reservation.Package}</p>
              <p className="text-gray-700 mb-2"><strong>Photographer:</strong> {reservation.Photographer ? 'Yes' : 'No'}</p>
              <p className="text-gray-700"><strong>Date & Time:</strong> {new Date(reservation.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          reservationsPerPage={reservationsPerPage}
          totalReservations={reservations.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const Pagination = ({ reservationsPerPage, totalReservations, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReservations / reservationsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="inline-flex -space-x-px">
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Page;
