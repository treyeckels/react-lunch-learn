var Cats = {
    init: function () {
        this.cacheDOMelements();
        this.setUpHandlers();
    },

    cacheDOMelements: function () {
        this.$galleryImage = $('.gallery-image');
        this.$galleryTitle = $('.gallery-title');
        this.$galleryCaption = $('.gallery-caption');
        this.$records = $('.record');
        this.$inputs = this.$records.find('input');
    },


    setUpHandlers: function () {
        var self = this;
        $('.hat-filter').change(function (evt) {
            var type = $(this).val();
            self.$records.each(function () {
                if ($(this).attr('data-type') === type) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });

        var self = this;

        this.$inputs.change(function (evt) {
            var $this = $(this);
            var $row = $this.parents('.record');
            var title = $row.find('.title').text();
            var src = $row.find('img').attr('src');
            var caption = $row.attr('data-caption');

            if ($(this).prop('checked')) {
                $row.attr('data-selected', true);
                var $firstInput = self.$inputs.eq(0);
                if ($firstInput.get(0) == this) {
                    $firstInput.prop('disabled', true);
                } else {
                    $firstInput.prop('disabled', false);
                }
                self.$galleryImage.attr('src', src);
                self.$galleryTitle.text(title);
                self.$galleryCaption.text(caption);

                self.$inputs.each(function () {
                    if ($this.get(0) == this) {
                        return;
                    }
                    var $parent = $(this).parents('.record');
                    $(this).prop('checked', false);
                    $parent.removeAttr('data-selected');
                });
            } else {
                var $first = self.$records.eq(0);
                var $input = $first.find('input');
                $input.prop('disabled', true);
                title = $first.find('.title').text();
                src = $first.find('img').attr('src');
                caption = $first.attr('data-caption');

                $first.attr('data-selected', true);
                self.$galleryImage.attr('src', src);
                self.$galleryTitle.text(title);
                self.$galleryCaption.text(caption);

                self.$inputs.each(function (elem, index) {
                    if (!index) {
                        return;
                    }
                    var $parent = $(this).parents('.record');
                    $(this).prop('checked', false);
                    $parent.removeAttr('data-selected');
                });
            }
        });
    }
};

$(document).ready(function () {
    Cats.init();
});
