// This file may be used for providing additional customizations to the Trestle
// admin. It will be automatically included within all admin pages.
//
// For organizational purposes, you may wish to define your customizations
// within individual partials and `require` them here.
//
//= require cocoon
//= require "./bulk_upload"

// Fade flash messages after a few seconds.
const removeAlerts = () => {
    let alertDiv = $(".alert-success")
    if (alertDiv.length) {
        setTimeout(() => { alertDiv.fadeOut() }, 2500)
    }
}

const collapseAppNav = () => {
    let dropdowns = $(".app-nav ul")
    dropdowns.each((_i, element) => {
        element.classList.add("collapsed")
    })
}

const unCollapseAppNav = () => {
    let dropdowns = $(".app-nav ul")
    dropdowns.each((_i, element) => {
        element.classList.remove("collapsed")
    })
}

const lenientParseDate = (datestr, format) => {
    console.log("step 2")
    if (datestr === null || datestr === undefined || datestr == "") {
        return new Date()
    }
    try {
        let result
        let { groups } = datestr.match(BABEPEDIA_DATE_FORMAT)
        if (groups) {
            let year       = parseIng(groups.year)
            let day        = parseIng(groups.day)
            let monthIndex = MONTHS.indexOf(groups.month)
            return new Date(year, monthIndex, day)
        }
        result = moment(datestr, format, true).toDate()
        return result
    } catch(error) {
        return new Date()
    }
}

const setTrestleSearchSuggestions = () => {
    try {
        if (gon == null || gon == undefined) { return }
        if (!gon.trestle_search_suggestions) { return }
    } catch (error) {
        return
    }

    const suggestions = gon.trestle_search_suggestions

    const searchField = document.getElementById("q")
    if (!searchField) { return }

    const datalist = document.createElement("datalist")
    datalist.id = "trestle_search_suggestions"
    for (const suggestion of suggestions) {
        let option = document.createElement("option")
        option.innerText = suggestion
        datalist.appendChild(option)
    }
    document.body.appendChild(datalist)
    searchField.setAttribute("list", "trestle_search_suggestions")
}

$(document).on("cocoon:after-insert", (e, fields) => {
    $(Trestle).trigger("init", fields)
})

$(Trestle).init(() => {
    // collapseAppNav()
    removeAlerts()
    setTrestleSearchSuggestions()
})

function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "/user/pages/images/flags";
    var $state = $(
      '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};

const formatSeries = (series) => {
    const $html = $(
    //   '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
      `<em>noice</em>`
    )
    return $html
};

// $(Trestle).init((root) => {
//     // if (window.claysStuffHasRun != true) {
//     //     window.claysStuffHasRun = true
//     //     // Sort tags by smallest first.
//     //     // I want "butt", not "butterface".

//     //     $("[data-clays_id='clays-cool-select']").select2({
//     //         // escapeMarkup: function(m) { return m; }
//     //         templateResult: formatSeries
//     //     })
//     // }
//     // $(".searchbox .search-field").select2({
//     //     theme: "bootstrap",
//     //     placeholder: '<i class="fa fa-search"></i> Search',
//     //     escapeMarkup : function(markup) {
//     //       return markup;
//     //     }
//     // })
// })
