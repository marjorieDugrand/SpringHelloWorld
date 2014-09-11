<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<!-- Pass the page title to the reusable head - needs to be in request scope or page parser won't get it -->
<c:set var="pageTitle" scope="request" value="Hello World!" />
<jsp:include page="head.jsp"/>

<!-- The head.jsp, styles and divs are all taken from Skeleton http://www.getskeleton.com/ 
- this is just an example showing how styles, images and page segment includes can be done-->
<body>

<div class="container">
    <div class="one-third column">
        <h3>Actions</h3>
        <ul><a href="<c:url value="/newuser" />">New User</a></ul>
    </div>

    <div class="two-thirds column">
        <h3>Hello world!</h3>

        <table>
            <thead><tr><td>ID</td><td>Name</td></tr></thead>
            <tbody>
            <c:forEach var="user" items="${users}">
                <tr>
	                <td><a href="<c:url value="/user/view" />/${user.id}">${user.id}</a></td>
	                <td>${user.username}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>