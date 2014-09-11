<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html>
<html>
<c:set var="pageTitle" scope="request" value="Edit User" />
<jsp:include page="head.jsp"/>
<body>

<div class="container">

    <div class="two-thirds column">
        <h3>Edit User</h3>

		<c:url value="/user/save" var="action" />
        <form:form method="POST" commandName="user" action="${action}">
            <form:hidden path="id" />
            <p>
                User Name :
                <form:input path="username" />
            </p>
            <p>Password :
                <form:password path="password" />
            </p>
            <p>Email :
                <form:input path="emailAddress" />
            </p>
            <p>First name :
                <form:input path="firstName" />
            </p>
            <p>Last name :
                <form:input path="lastName" />
            </p>
        <input type="submit" value="Save" />
        </form:form>

        <c:if test="${user.id ne null}">
            <p><a href="<c:url value="/user/delete" />/${user.id}">Delete this user</a></p>
        </c:if>
    </div>



</div>
</body>
</html>