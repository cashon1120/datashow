window.utils = {
    formatData: function(data) {
        let datasource = data.replace(/\s+/g, '')
        datasource = datasource.replace(/(\r\n)|(\n)|(\r)/g, '');
        datasource = data.split('|')
        return datasource
    }
}