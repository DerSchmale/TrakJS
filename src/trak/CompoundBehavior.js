TRAK.CompoundBehavior = function(behaviors)
{
    this._behaviors = behaviors;
}

TRAK.CompoundBehavior.prototype = new TRAK.Behavior();

TRAK.CompoundBehavior.prototype.update = function(dt, time)
{
    for (var i = 0; i < this._behaviors.length; ++i)
        this._behaviors[i].update(dt, time);
};

TRAK.CompoundBehavior.prototype.onMarker = function(name)
{
    for (var i = 0; i < this._behaviors.length; ++i)
        this._behaviors[i].onMarker(name);
};

TRAK.CompoundBehavior.prototype.onRegister = function()
{
    for (var i = 0; i < this._behaviors.length; ++i)
        this._behaviors[i].onRegister();
};

TRAK.CompoundBehavior.prototype.onRemove = function()
{
    for (var i = 0; i < this._behaviors.length; ++i)
        this._behaviors[i].onRemove();
};

/**
 * @private
 */
TRAK.CompoundBehavior.setStrength = function(value)
{
    this._strength = value;

    for (var i = 0; i < this._behaviors.length; ++i)
        this._behaviors[i].setStrength(value);
}