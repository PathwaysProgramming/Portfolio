# Housekeeping
- Open an HTML File
- Open an CSS File (link files to each other )
- Open a Javascript File (link files to each other)
- Download Live Server Extension
- Download Prettier Extension
- Copy Contacts Section and Personalize
- Copy Footer Section and Personalize 

### Navbar
- Comment
     If you want to add comments in HTML you do so by adding your text in between ``` <! --``` and ```-->```
- Create Nav
  ``` nav.navbar``` Click `tab`
-  Div
  For Divs you do not actually have to type the word div just do a dot and the name of the class you want to make so `.logo ` and `tab`

- Create an unordered list `<ul>` to hold the navigation links. This will help organize them in a list format.
  
- For each link, create a `<li>` and inside it, an `<a>` tag. The `<a>` tag is for making hyperlinks, and the href attribute is where you point to (e.g., #about).
  
- Close your tags properly. Always remember to close each tag, such as `</nav>`, `</ul>`

```
 <!-- Navbar -->
    <nav>
        <div class="logo">My Portfolio</div>
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

```

### Hero Section
CODE WITH INSTRUCTOR
### About Section
CODE WITH INSTRUCTOR
### Projects Section
CODE WITH INSTRUCTOR

**How it works:**
`<a href="project1.html">`: The href attribute specifies the destination of the link. In this case, it links to project1.html. You can change "project1.html" to the actual path of the page you want to link to.
The entire project-card (image, title, and description) is wrapped in the `<a>` tag. This means that clicking anywhere on the project card will take the user to the linked page.

**External Link Example:**
If you want to link to an external page (e.g., a live version of the project), you can replace the href with a full URL:

```<a href="https://www.example.com/project1"> <!-- External link -->```

**Open in a new tab:**

If you want the link to open in a new tab when clicked, add the `target="_blank"` attribute to the `<a>` tag:
```<a href="project1.html" target="_blank">```



### Contacts Session
Already Done For You; Simply Edit the Information to Personalize
```
<!-- Contact Section -->
    <section id="contact" class="section">
        <h2>Contact Me</h2>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </section>
```

### Footer Section 
Already Done For You ; Simply Edit the "Your Name" part :) 

```
<!-- Footer -->
    <footer>
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
```

