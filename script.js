function goTo(path, oldList, newList) {
    const article = document.querySelectorAll('article');

    article.forEach(function(article) {
        article.style.display = 'none';
    });
    
    /* Fjerner klassen fra hvor vi var, til hvor vi er nå */
    let selectedOld = document.getElementById(oldList)
    let selectedNew = document.getElementById(newList)
    selectedOld.classList.remove('current-item') 
    selectedNew.classList.add('current-item')

    /* Legger til flex, sånn at når vi navigerer videre så kan vi faktisk se boksen */
    let selectedPath = document.getElementById(path);
    if (selectedPath) {
        selectedPath.style.display = 'flex';
        if (selectedPath.querySelector('article')) {
            selectedPath.querySelector('article').style.display = "flex"
        }
    }
}

function toggleDropdown(dropdownContentDiv) {
    const dropdownContents = [
        document.getElementById('dropdown-content'),
        document.getElementById('dropdown-content1'),
        document.getElementById('dropdown-content2'),
        document.getElementById('dropdown-content3'),
        document.getElementById('dropdown-content4')
    ];

    var dropdownContent = document.getElementById(dropdownContentDiv);

    dropdownContents.forEach(content => {
        if (content !== dropdownContent) {
            content.style.display = 'none';
        }
    });

    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}