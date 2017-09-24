<?php header("Content-type: text/css");?>
/*******************************************************************/
/* 					     	  pop out BOX	 						/
/*******************************************************************/
.modal {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 5%; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
table, td {
    border: 1px solid black;
    margin: 5px;
    padding: 3px;
    border: 2px solid rgba(255,255,255,0.7);
    text-align: left;
}
table{
	border-collapse: collapse;
	
}
th {
	text-align: center;
	border: 2px solid #ddd;
	font-size: 15pt;
}
/* Modal Content */
.modal-content {
    position: relative;
    background-color: rgba(220,220,220,0.9);
    margin: 0 auto;
    padding: 0;
    border: 5px solid #888;
    border-radius: 15px;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0} 
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

/* The Close Button */
.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
	text-align: center;
    padding: 2px 16px;
    background-color:rgb(38, 28, 28);
    color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
	text-align: right;
    padding: 2px 16px;
    background-color: rgb(38, 28, 28);
    color: white;
}