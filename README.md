# cascade-tabbed-search

[Home](https://library.niu.edu) |
[Source](https://github.com/NIUTISS/cascade-tabbed-search) 

Tabbed search for Libraries' catalog and primary electronic repositories. Includes alerts, tabbed search and rotating banner. Rotating banner images are not included. [Live Demo](https://library.niu.edu)

## Installation and Deployment

This implementation is intended for use with NIU's web content management system Cascade and utilizes its internal block feature. Blocks can be embedded directly on any HTML page. Just copy and paste the code from search.shtml. You may have to adjust your styling to accomodate for fonts and font sizes being used.

### Additional Requirements

Ensure the following libraries are referenced from the page you are using the tabbed search in:

- jQuery 3.6.1
- Bootstrap 4.2.1 (older versions should work)

Example:

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- ... title, declarations, references, additional scripts ... -->
        <link crossorigin="anonymous" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.2.1/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    </head>
    <body>
        <main class="container">
            <!-- ... exisitng html elements ... -->
        </main>
        <!-- ... copy & paste here from search.html ... -->
    </body>
</html>
```

## Notes

Please contact us at [ulibsysoff@niu.edu](mailto:ulibsysoff@niu.edu) if you have any questions.