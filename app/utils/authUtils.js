import React from 'react';


export function isLoggedIn() {
	var token = sessionStorage.getItem('jwtToken');
	return token !== undefined && token !== null;
}