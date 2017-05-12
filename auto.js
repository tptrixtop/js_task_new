let auto = (function () {

    base_auto.getRequiredLicenseCategory = function (auto) {

        if(auto.hasOwnProperty('collapseRoof')) {
            return 'cabriolet_license';
        }

        return 'simple_license';

    };

    function base_auto(maxSpeed = 120, speed = 0, speedUnit = 'A') {

        let
            me = {},
            _max_speed = maxSpeed,
            _speed = speed,
            _speed_unit =  speedUnit,
            _engine_on = false
        ;

        publicApi();

        function publicApi() {
            me = {
                getSpeed: function () {
                    return _speed;
                },

                setSpeed(speed) {
                    _speed = speed;
                    return this;
                },

                turnEngineOn: function () {
                    _engine_on = true;
                    return this;
                },

                turnEngineOff: function () {
                    _engine_on = false;
                    return this;
                },

                isEngineOn: function () {
                    return _engine_on;
                },

                pressKlaxon: function () {
                    console.log('Klaxon pressed');
                    return this;
                }

            };
        }

        return me;

    };

    return base_auto;

})();

let cabriolet = function (maxSpeed = 120, speed = 0, speedUnit = 'A') {

    let
        _roof_collapsed = true,
        me = auto(maxSpeed, speed, speedUnit)
    ;

    publicApi();

    function publicApi() {

        Object.assign(me, {
            collapseRoof: function () {
                _roof_collapsed = true;
                return this;
            },

            raiseRoof: function () {
                _roof_collapsed = false;
            },

            pressKlaxon: function () {
                console.log('Cabriolet klaxon pressed');
                return this;
            }

        });

    };

    return me;

};
