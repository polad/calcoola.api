exports.calculators = [{
    name: "Pressure gradient using mud weight, ppg",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "psi/ft",
    formula: "args.a*0.052",
    description: "formula: psi/ft = (mud weight, ppg) x 0.052",
    test: {
        args: {
            a: 12.0
        },
        result: 0.62
    }
}, {
    name: "Pressure gradient using mud weight, lb/ft&sup3",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "lb/ft&sup3",
            defaultValue: 0.0
        }
    },
    uom: "psi/ft",
    formula: "args.a*0.006944",
    description: "formula: psi/ft = (mud weight, lb/ft&sup3) x 0.006944"
}, {
    name: "Pressure gradient using mud weight, specific gravity (SG)",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "SG",
            defaultValue: 0.0
        }
    },
    uom: "psi/ft",
    decimals: 3,
    formula: "args.a*0.433",
    description: "formula: psi/ft = (mud weight, SG) x 0.433"
}, {
    name: "Convert pressure gradient to mud weight, ppg",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Pressure Gradient",
            uom: "psi/ft",
            defaultValue: 0.0
        }
    },
    uom: "ppg",
    formula: "args.a/0.052",
    description: "formula: ppg = (pressure gradient, psi/ft) / 0.052"
}, {
    name: "Convert pressure gradient to mud weight, lb/ft&sup3",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Pressure Gradient",
            uom: "psi/ft",
            defaultValue: 0.0
        }
    },
    uom: "lb/ft&sup3",
    formula: "args.a/0.006944",
    description: "formula: lb/ft&sup3 = (pressure gradient, psi/ft) / 0.006944"
}, {
    name: "Convert pressure gradient to mud weight, SG",
    categories: [ "Basic Drilling Formulas", "Pressure Gradient" ],
    args: {
        a: {
            label: "Pressure Gradient",
            uom: "psi/ft",
            defaultValue: 0.0
        }
    },
    uom: "SG",
    formula: "args.a/0.433",
    description: "formula: SG = (pressure gradient, psi/ft) / 0.433"
}, {
    name: "Hydrostatic pressure using ppg and feet as the units of measure",
    categories: [ "Basic Drilling Formulas", "Hydrostatic Pressure" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "True Vertical Depth",
            uom: "ft",
            defaultValue: 0
        }
    },
    uom: "psi",
    formula: "args.a*0.052*args.b",
    description: "formula: psi = (mud weight, ppg) x 0.052 x (true vertical depth (TVD), ft)"
}, {
    name: "Hydrostatic pressure, psi, using pressure gradient, psi/ft",
    categories: [ "Basic Drilling Formulas", "Hydrostatic Pressure" ],
    args: {
        a: {
            label: "Pressure Gradient",
            uom: "psi/ft",
            defaultValue: 0.0
        },
        b: {
            label: "True Vertical Depth",
            uom: "ft",
            defaultValue: 0
        }
    },
    uom: "psi",
    formula: "args.a*args.b",
    description: "formula: psi = (pressure gradient, psi/ft) x (true vertical depth, ft)"
}, {
    name: "Hydrostatic pressure, psi, using mud weight, lb/ft&sup3",
    categories: [ "Basic Drilling Formulas", "Hydrostatic Pressure" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "lb/ft&sup3",
            defaultValue: 0
        },
        b: {
            label: "True Vertical Depth",
            uom: "ft",
            defaultValue: 0
        }
    },
    uom: "psi",
    formula: "args.a*0.006944*args.b",
    description: "formula: psi = (mud weight, lb/ft&sup3) x 0.006944 x (TVD, ft)"
}, {
    name: "Hydrostatic pressure, psi, using meters as unit of depth",
    categories: [ "Basic Drilling Formulas", "Hydrostatic Pressure" ],
    args: {
        a: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "True Vertical Depth",
            uom: "m",
            defaultValue: 0
        }
    },
    uom: "psi",
    formula: "args.a*0.052*args.b*3.281",
    description: "formula: psi = (mud weight, ppg) x 0.052 x (TVD, m) x 3.281"
}, {
    name: "Equivalent Circulating Density (ECD)",
    categories: [ "Basic Drilling Formulas" ],
    args: {
        a: {
            label: "Annular Pressure Loss",
            uom: "psi",
            defaultValue: 0
        },
        b: {
            label: "True Vertical Depth",
            uom: "ft",
            defaultValue: 0
        },
        c: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "ppg",
    formula: "(args.a/0.052/args.b)+args.c",
    description: "formula: ppg = ((annular pressure loss, psi) / 0.052 / TVD, ft) + (mud weight in use, ppg)"
}, {
    name: "Maximum Allowable Mud Weight from Leak-off Test Data",
    categories: [ "Basic Drilling Formulas" ],
    args: {
        a: {
            label: "Leak-Off Test Pressure",
            uom: "psi",
            defaultValue: 0
        },
        b: {
            label: "Casing Shoe TVD",
            uom: "ft",
            defaultValue: 0
        },
        c: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "ppg",
    formula: "(args.a/0.052/args.b)+args.c",
    description: "formula: ppg = ((Leak-off Pressure, psi) / 0.052 / (Casing Shoe TVD, ft)) + (mud weight, ppg)"
}, {
    name: "Pump Out (PO) Triplex Pump, bbl/stk",
    categories: [ "Basic Drilling Formulas", "Pump Output" ],
    args: {
        a: {
            label: "Liner Diameter",
            uom: "in",
            defaultValue: 0
        },
        b: {
            label: "Stroke Length",
            uom: "in",
            defaultValue: 0
        },
        c: {
            label: "Efficiency",
            uom: "%",
            defaultValue: 100
        }
    },
    uom: "bbl/stk",
    decimals: 5,
    formula: "0.000243*Math.pow(args.a,2)*args.b*(args.c/100)",
    description: "formula: bbl/stk = 0.000243 x (liner diameter, in.)&sup2 X (stroke length, in.)"
}, {
    name: "Pump Out (PO) Triplex Pump, gpm",
    categories: [ "Basic Drilling Formulas", "Pump Output" ],
    args: {
        a: {
            label: "Liner Diameter",
            uom: "in",
            defaultValue: 0
        },
        b: {
            label: "Stroke Length",
            uom: "in",
            defaultValue: 0
        },
        c: {
            label: "Strokes Per Minute",
            uom: "SPM",
            defaultValue: 0
        }
    },
    uom: "gpm",
    formula: "(3*(Math.pow(args.a,2)*0.7854)*args.b)*0.00411*args.c",
    description: "formula: gpm = [3 x ((liner diameter, in.)&sup2 x 0.7854) x (stroke length, in.)] 0.00411 x (strokes per minute)"
}, {
    name: "Pump Out (PO) Duplex Pump, bbl/stk",
    categories: [ "Basic Drilling Formulas", "Pump Output" ],
    args: {
        a: {
            label: "Liner Diameter",
            uom: "in",
            defaultValue: 0
        },
        b: {
            label: "Stroke Length",
            uom: "in",
            defaultValue: 0
        },
        c: {
            label: "Rod Diameter",
            uom: "in",
            defaultValue: 0
        },
        d: {
            label: "Efficiency",
            uom: "%",
            defaultValue: 100
        }
    },
    uom: "bbl/stk",
    decimals: 5,
    formula: "0.000162*args.b*(2*Math.pow(args.a,2)-Math.pow(args.c,2))*(args.d/100)",
    description: "formula: bbl/stk = 0.000162 x (stroke length, in.) x (2 x (liner diameter, in.)&sup2 - (rod diameter, in.)&sup2)"
}, {
    name: "Mud weight, ppg, increase with barite",
    categories: [ "Drilling Fluids", "Increase Mud Density" ],
    description: "formula: (1470 * ((desirable density, ppg) - (starting density, ppg)))/(35 - (desirable density, ppg))",
    args: {
        a: {
            label: "Starting Density",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "Desirable Density",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "sk/100 bbl",
    formula: "(1470*(args.b-args.a))/(35-args.b)"
}, {
    name: "Volume increase, bbl, due to mud weight increase with barite",
    categories: [ "Drilling Fluids", "Increase Mud Density" ],
    description: "formula: (100 * ((desirable.density, ppg) - (starting.density, ppg)))/(35 - (desirable.density, ppg))",
    args: {
        a: {
            label: "Starting Density",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "Desirable Density",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "bbl per 100 bbl",
    formula: "(100*(args.b-args.a))/(35-args.b)"
}, {
    name: "Starting volume, bbl, of original mud weight required to give a final volume of desired mud weight with barite",
    categories: [ "Drilling Fluids", "Increase Mud Density" ],
    description: "formula: ((desirable.volume, bbl) * (35 - (desirable.density, ppg)))/(35 - (starting.density, ppg))",
    args: {
        a: {
            label: "Starting Density",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "Desirable Density",
            uom: "ppg",
            defaultValue: 0.0
        },
        c: {
            label: "Desirable Volume",
            uom: "bbl",
            defaultValue: 0.0
        }
    },
    uom: "bbl",
    formula: "(args.c*(35-args.b))/(35-args.a)"
}, {
    name: "Mud weight increase with calcium carbonate (SG - 2.7)",
    categories: [ "Drilling Fluids", "Increase Mud Density" ],
    description: "formula: (945 * ((desirable.density, ppg)-(starting.density, ppg)))/(22.5 - (desirable.density, ppg))",
    args: {
        a: {
            label: "Starting Density",
            uom: "ppg",
            defaultValue: 0.0
        },
        b: {
            label: "Desirable Density",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "Sacks/100 bbl",
    formula: "(945*(args.b-args.a))/(22.5-args.b)"
}, {
    name: "Convert pressure, psi, into mud weight, ppg using feet as the unit of measure",
    categories: [ "Basic Drilling Formulas" ],
    description: "formula: mud weight, ppg = (pressure, psi) / 0.052 / (TVD, ft)",
    args: {
        a: {
            label: "Pressure",
            uom: "psi",
            defaultValue: 0
        },
        b: {
            label: "True Vertical Depth",
            uom: "ft",
            defaultValue: 0
        }
    },
    uom: "ppg",
    formula: "args.a/0.052/args.b"
}, {
    name: "Convert pressure, psi, into mud weight, ppg using meters as the unit of measure",
    categories: [ "Basic Drilling Formulas" ],
    description: "formula: mud weight, ppg = (pressure, psi) / 0.1706 / (TVD, m)",
    args: {
        a: {
            label: "Pressure",
            uom: "psi",
            defaultValue: 0
        },
        b: {
            label: "True Vertical Depth",
            uom: "m",
            defaultValue: 0
        }
    },
    uom: "ppg",
    formula: "args.a/0.1706/args.b"
}, {
    name: "Specific gravity using mud weight, ppg",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: SG = (mud weight, ppg) / 8.33",
    args: {
        a: {
            label: "Mud Weight",
            uom: "ppg",
            defaultValue: 0.0
        }
    },
    uom: "SG",
    formula: "args.a/8.33"
}, {
    name: "Specific gravity using pressure gradient, psi/ft",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: SG = (pressure gradient, psi/ft) / 0.433",
    args: {
        a: {
            label: "Pressure Gradient",
            uom: "psi/ft",
            defaultValue: 0.0
        }
    },
    uom: "SG",
    formula: "args.a/0.433"
}, {
    name: "Specific gravity using mud weight, lb/ft&sup3",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: SG = (mud weight, lb/ft&sup3) / 62.4",
    args: {
        a: {
            label: "Mud Weight",
            uom: "lb/ft&sup3",
            defaultValue: 0
        }
    },
    uom: "SG",
    formula: "args.a/62.4"
}, {
    name: "Convert specific gravity to mud weight, ppg",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: mud weight, ppg = (specific gravity) * 8.33",
    args: {
        a: {
            label: "Specific Gravity",
            uom: "SG",
            defaultValue: 0.0
        }
    },
    uom: "ppg",
    formula: "args.a*8.33"
}, {
    name: "Convert specific gravity to pressure gradient, psi/ft",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: psi/ft = (specific gravity) * 0.433",
    args: {
        a: {
            label: "Specific Gravity",
            uom: "SG",
            defaultValue: 0.0
        }
    },
    uom: "psi/ft",
    decimals: 3,
    formula: "args.a*0.433"
}, {
    name: "Convert specific gravity to mud weight, lb/ft&sup3",
    categories: [ "Basic Drilling Formulas", "Specific Gravity" ],
    description: "formula: mud weight, lb/ft&sup3 = (specific gravity) * 62.4",
    args: {
        a: {
            label: "Specific Gravity",
            uom: "SG",
            defaultValue: 0.0
        }
    },
    uom: "lb/ft&sup3",
    formula: "args.a*62.4"
}, {
    name: "Annular Velocity (AV), ft/min, Formula 1",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: AV, ft/min = (pump output, bbl/min) / (annular capacity, bbl/ft)",
    args: {
        a: {
            label: "Pump Output",
            uom: "bbl/min",
            defaultValue: 0.0
        },
        b: {
            label: "Annular Capacity",
            uom: "bbl/ft",
            defaultValue: 0.0
        }
    },
    uom: "ft/min",
    formula: "args.a/args.b"
}, {
    name: "Annular Velocity (AV), ft/min, Formula 2",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: AV, ft/min = (24.5 x (circulation rate, gpm)) / ((inside diameter of casing or hole size, in)&sup2 - (outside diameter of pipe, tubing or collars, in)&sup2)",
    args: {
        a: {
            label: "Circulation Rate",
            uom: "gpm",
            defaultValue: 0
        },
        b: {
            label: "Inside Diameter of Casing",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Outside Diameter of Pipe",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/min",
    formula: "(24.5*args.a)/(Math.pow(args.b,2)-Math.pow(args.c,2))"
}, {
    name: "Annular Velocity (AV), ft/min, Formula 3",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: AV, ft/min = ((pump output, bbl/min) * 1029.4) / ((inside diameter of casing or hole size, in)&sup2 - (outside diameter of pipe, tubing or collars, in)&sup2)",
    args: {
        a: {
            label: "Pump Output",
            uom: "bbl/min",
            defaultValue: 0.0
        },
        b: {
            label: "Inside Diameter of Casing",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Outside Diameter of Pipe",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/min",
    formula: "(args.a*1029.4)/(Math.pow(args.b,2)-Math.pow(args.c,2))"
}, {
    name: "Annular Velocity (AV), ft/sec",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: AV, ft/sec = (17.16 * (pump output, bbl/min)) / ((inside diameter of casing or hole size, in)&sup2 - (outside diameter of pipe, tubing or collars, in)&sup2)",
    args: {
        a: {
            label: "Pump Output",
            uom: "bbl/min",
            defaultValue: 0.0
        },
        b: {
            label: "Inside Diameter of Casing",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Outside Diameter of Pipe",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/sec",
    decimals: 3,
    formula: "(17.16*args.a)/(Math.pow(args.b,2)-Math.pow(args.c,2))"
}, {
    name: "Pump output, gpm, required for a desired annular velocity, ft/min",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: Pump output, gpm = ((AV, ft/min) * ((inside diameter of casing or hole size, in)&sup2 - (outside diameter of pipe, tubing or collars, in)&sup2)) / 24.5",
    args: {
        a: {
            label: "Annular Velocity",
            uom: "ft/min",
            defaultValue: 0.0
        },
        b: {
            label: "Inside Diameter of Casing",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Outside Diameter of Pipe",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "gpm",
    formula: "(args.a*(Math.pow(args.b,2)-Math.pow(args.c,2)))/24.5"
}, {
    name: "Strokes per minute (SPM) required for a given annular velocity",
    categories: [ "Basic Drilling Formulas", "Annular Velocity" ],
    description: "formula: SPM = ((annular velocity, ft/min) * (annular capacity, bbl/ft)) / (pump output, bbl/stk)",
    args: {
        a: {
            label: "Annular Velocity",
            uom: "ft/min",
            defaultValue: 0.0
        },
        b: {
            label: "Annular Capacity",
            uom: "bbl/ft",
            defaultValue: 0.0
        },
        c: {
            label: "Pump Output",
            uom: "bbl/stk",
            defaultValue: 0.0
        }
    },
    uom: "SPM",
    formula: "(args.a*args.b)/args.c"
}, {
    name: "Annular capacity (bbl/ft) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: bbl/ft = ((hole size, in)&sup2 - (drill pipe OD, in)&sup2) / 1029.4",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "bbl/ft",
    formula: "((args.a*args.a)-(args.b*args.b))/1029.4",
    decimals: 5
}, {
    name: "Annular capacity (ft/bbl) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: ft/bbl = 1029.4 / ((hole size, in)&sup2 - (drill pipe OD, in)&sup2)",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/bbl",
    formula: "1029.4/((args.a*args.a)-(args.b*args.b))",
    decimals: 5
}, {
    name: "Annular capacity (gal/ft) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: gal/ft = ((hole size, in)&sup2 - (drill pipe OD, in)&sup2) / 24.51",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "gal/ft",
    formula: "((args.a*args.a)-(args.b*args.b))/24.51",
    decimals: 5
}, {
    name: "Annular capacity (ft/gal) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: ft/gal = 24.51 / ((hole size, in)&sup2 - (drill pipe OD, in)&sup2)",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/gal",
    formula: "24.51/((args.a*args.a)-(args.b*args.b))",
    decimals: 5
}, {
    name: "Annular capacity (ft&sup3/lin-ft) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: ft&sup3/lin-ft = ((hole size, in)&sup2 - (drill pipe OD, in)&sup2) / 183.35",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft&sup3/lin-ft",
    formula: "((args.a*args.a)-(args.b*args.b))/183.35",
    decimals: 5
}, {
    name: "Annular capacity (lin-ft/ft&sup3) between casing or hole and drill pipe, tubing or casing",
    categories: [ "Basic Drilling Formulas", "Capacity, Formulas" ],
    description: "formula: lin-ft/ft&sup3 = 183.35 / ((hole size, in)&sup2 - (drill pipe OD, in)&sup2)",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Drill Pipe OD",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "lin-ft/ft&sup3",
    formula: "183.35/((args.a*args.a)-(args.b*args.b))",
    decimals: 5
}, {
    name: "Annular capacity (bbl/ft) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: bbl/ft = ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2)) / 1029.4",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "bbl/ft",
    formula: "((args.a*args.a)-((args.b*args.b)+(args.c*args.c)))/1029.4",
    decimals: 5
}, {
    name: "Annular capacity (ft/bbl) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: ft/bbl = 1029.4 / ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2))",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/bbl",
    formula: "1029.4/((args.a*args.a)-((args.b*args.b)+(args.c*args.c)))",
    decimals: 5
}, {
    name: "Annular capacity (gal/ft) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: gal/ft = ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2)) / 24.51",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "gal/ft",
    formula: "((args.a*args.a)-((args.b*args.b)+(args.c*args.c)))/24.51",
    decimals: 5
}, {
    name: "Annular capacity (ft/gal) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: ft/gal = 24.51 / ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2))",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/gal",
    formula: "24.51/((args.a*args.a)-((args.b*args.b)+(args.c*args.c)))",
    decimals: 5
}, {
    name: "Annular capacity (ft&sup3/lin-ft) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: ft&sup3/lin-ft = ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2 + (tubing #3, in)&sup2)) / 183.35",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        },
        d: {
            label: "Tubing #3",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft&sup3/lin-ft",
    formula: "((args.a*args.a)-((args.b*args.b)+(args.c*args.c)+(args.d*args.d)))/183.35",
    decimals: 5
}, {
    name: "Annular capacity (lin-ft/ft&sup3) between casing and multiple strings of tubing",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: lin-ft/ft&sup3 = 183.35 / ((casing, in)&sup2 - ((tubing #1, in)&sup2 + (tubing #2, in)&sup2 + (tubing #3, in)&sup2))",
    args: {
        a: {
            label: "Casing",
            uom: "in",
            defaultValue: 0.0
        },
        b: {
            label: "Tubing #1",
            uom: "in",
            defaultValue: 0.0
        },
        c: {
            label: "Tubing #2",
            uom: "in",
            defaultValue: 0.0
        },
        d: {
            label: "Tubing #3",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "lin-ft/ft&sup3",
    formula: "183.35/((args.a*args.a)-((args.b*args.b)+(args.c*args.c)+(args.d*args.d)))",
    decimals: 5
}, {
    name: "Capacity (bbl/ft) of tubulars and open hole: any cylindrical object",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: bbl/ft = (D, in)&sup2 / 1029.4",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "bbl/ft",
    formula: "(args.a*args.a)/1029.4",
    decimals: 5,
    test: {
        args: {
            a: 12.25
        },
        result: 0.14578
    }
}, {
    name: "Capacity (ft/bbl) of tubulars and open hole: any cylindrical object",
    categories: [ "Basic Drilling Formulas", "Capacity Formulas" ],
    description: "formula: ft/bbl = 1029.4 / (D, in)&sup2",
    args: {
        a: {
            label: "Hole Size",
            uom: "in",
            defaultValue: 0.0
        }
    },
    uom: "ft/bbl",
    formula: "1029.4/(args.a*args.a)",
    decimals: 5,
    test: {
        args: {
            a: 12.25
        },
        result: 6.85981
    }
}];
