export const perks = {
  widowmaker: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Scoped Efficiency",
          description: "Scoped shots cost 3 ammo instead of 5.",
          icon: "/images/perks/scoped-efficiency.png",
        },
        {
          name: "Sniper’s Instinct",
          description:
            "Scoped shots charge 100% faster after using Grappling Hook.",
          icon: "/images/perks/snipers-instinct.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Seeker Mine",
          description:
            "Venom Mine fires poison darts at enemies within 10 meters and remains active after triggered.",
          icon: "/images/perks/seeker-mine.png",
        },
        {
          name: "Widow’s Bite",
          description:
            "Scoped shots can charge up to 125%, piercing enemies when fully charged.",
          icon: "/images/perks/widows-bite.png",
        },
      ],
    },
  },
  ana: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Groggy",
          description:
            "Enemies waking from Sleep Dart are slowed and take 50 damage over 2 seconds.",
          icon: "/images/perks/groggy.png",
        },
        {
          name: "Speed Serum",
          description:
            "Nano Boost grants a 40% movement speed boost to both Ana and her target.",
          icon: "/images/perks/speed-serum.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Biotic Bounce",
          description:
            "After exploding, Biotic Grenade bounces and explodes again for 60 damage and healing.",
          icon: "/images/perks/biotic-bounce.png",
        },
        {
          name: "Headhunter",
          description: "Biotic Rifle can crit enemies.",
          icon: "/images/perks/headhunter.png",
        },
      ],
    },
  },
  anran: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Smoulder",
          description: "Ignited enemies burn 1.5 seconds longer.",
          icon: "/images/perks/smoulder.png",
        },
        {
          name: "Heat Shield",
          description:
            "Gain 50 overhealth when you use your Ultimate and for each enemy ignited by it.",
          icon: "/images/perks/heat-shield.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Short Fuse",
          description:
            "Impacting an enemy with Inferno Rush reduces its cooldown by 1.5 seconds.",
          icon: "/images/perks/short-fuse.png",
        },
        {
          name: "Hungering Blaze",
          description:
            "Increase the healing of Dancing Blaze's subsequent strikes by 25%.",
          icon: "/images/perks/hungering-blaze.png",
        },
      ],
    },
  },
  ashe: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Remote Detonator",
          description:
            "After using Dynamite, pressing E again causes it to detonate after a 0.5 second delay.",
          icon: "/images/perks/remote-detonator.png",
        },
        {
          name: "Double-Barreled",
          description:
            "Knocking an enemy back with Coach Gun briefly allows you to use it one more time with 25% less knockback.",
          icon: "/images/perks/double-barreled.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Viper's Sting",
          description:
            "Hitting 2 consecutive scoped shots on a target deals 25 extra damage and reloads 1 ammo.",
          icon: "/images/perks/vipers-sting.png",
        },
        {
          name: "Airburst",
          description:
            "Dynamite has a 40% increased detonation radius while airborne and refunds 3 ammo when thrown.",
          icon: "/images/perks/airburst.png",
        },
      ],
    },
  },
  baptiste: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Expanded Field",
          description: "Immortality Field's radius is 30% bigger.",
          icon: "/images/perks/expanded-field.png",
        },
        {
          name: "Assault Burst",
          description:
            "Regenerative Burst now provides Baptiste with 20% increased attack speed for 3 seconds.",
          icon: "/images/perks/assault-burst.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Automated Healing",
          description:
            "Using any ability triggers Baptiste's Shoulder Turret, periodically firing up to 3 shots at allies, each restoring 40 health.",
          icon: "/images/perks/automated-healing.png",
        },
        {
          name: "Rocket Boots",
          description:
            "While airborne from Exo Boots, press Space to dash horizontally.",
          icon: "/images/perks/rocket-boots.png",
        },
      ],
    },
  },
  bastion: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Armored Artillery",
          description:
            "Configuration: Artillery grants 300 temporary overhealth.",
          icon: "/images/perks/armored-artillery.png",
        },
        {
          name: "Configuration Reload",
          description:
            "Reduce the cooldown of A-36 Tactical Grenade by 4 seconds when changing configurations.",
          icon: "/images/perks/configuration-reload.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Lindholm Explosives",
          description:
            "Configuration: Assault's weapon slowly fires explosive shells instead of a rotary cannon.",
          icon: "/images/perks/lindholm-explosives.png",
        },
        {
          name: "Self-Repair",
          description: "Press E to rapidly heal yourself.",
          icon: "/images/perks/self-repair.png",
        },
      ],
    },
  },
  brigitte: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Combat Medic",
          description:
            "Melee attacks against enemies reduce the cooldown of Repair Pack by 0.75 seconds.",
          icon: "/images/perks/combat-medic.png",
        },
        {
          name: "Morale Boost",
          description:
            "Inspire lasts 3 seconds longer when activated by Whip Shot.",
          icon: "/images/perks/morale-boost.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Inspiring Strike",
          description:
            "Shield Bash grants 30% increased movement speed for 2 seconds. Inspire's healing is instant when activated by Shield Bash.",
          icon: "/images/perks/inspiring-strike.png",
        },
        {
          name: "Whiplash",
          description:
            "Whip Shot's knockback can slam enemies into walls, dealing 50 extra damage.",
          icon: "/images/perks/whiplash.png",
        },
      ],
    },
  },
  cassidy: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Bang Bang",
          description:
            "Cassidy throws a second Flashbang that travels farther, but both Flashbangs deal 40% reduced damage.",
          icon: "/images/perks/bang-bang.png",
        },
        {
          name: "Even The Odds",
          description:
            "Regenerate 30 health per second for each enemy targeted by Deadeye.",
          icon: "/images/perks/even-the-odds.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Rollin' Round-Up",
          description:
            "Combat Roll also heals 15 health for each bullet reloaded.",
          icon: "/images/perks/rollin-round-up.png",
        },
        {
          name: "Silver Bullet",
          description:
            "Peacekeeper's secondary fire is replaced with a piercing shot that inflicts bleeding. Combat Roll and Deadeye reset its cooldown.",
          icon: "/images/perks/silver-bullet.png",
        },
      ],
    },
  },
  domina: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Efficient Design",
          description:
            "After using Barrier Array, restore 50 shields and activate passive health regeneration.",
          icon: "/images/perks/efficient-design.png",
        },
        {
          name: "Extended Power",
          description: "Increase the range of Photon Magnum by 20%.",
          icon: "/images/perks/extended-power.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Disruptive Detonation",
          description:
            "Enemies hit by Crystal Charge's explosion are slowed by 30% for 2 seconds.",
          icon: "/images/perks/disruptive-detonation.png",
        },
        {
          name: "Power Move",
          description:
            "Barrier Array can be used as a wall to stun enemies with Sonic Repulsors with a 100% damage increase.",
          icon: "/images/perks/power-move.png",
        },
      ],
    },
  },
  doomfist: {
    minor: {
      level: 2,
      perks: [
        {
          name: "One-Two",
          description:
            "Hitting an enemy into a wall with Rocket Punch reloads Hand Cannon and overfills ammo by 2.",
          icon: "/images/perks/one-two.png",
        },
        {
          name: "Survival of the Fittest",
          description:
            "The Best Defense grants 25 overhealth from eliminations and its max overhealth is increased by 50.",
          icon: "/images/perks/survival-of-the-fittest.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Aftershock",
          description:
            "Enemies hit by Seismic Slam are slowed by 40% for 2 seconds.",
          icon: "/images/perks/aftershock.png",
        },
        {
          name: "Power Matrix",
          description:
            "Power Block absorbs projectiles for the first second of its duration.",
          icon: "/images/perks/power-matrix.png",
        },
      ],
    },
  },
  dva: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Bunny Power",
          description:
            "Eject grants 75 temporary overhealth and Call Mech’s damage radius is increased by 50%.",
          icon: "/images/perks/bunny-power.png",
        },
        {
          name: "Extended Boosters",
          description:
            "Hitting an enemy with Boosters deals 40% increased damage and extends the duration by 0.5 seconds.",
          icon: "/images/perks/extended-boosters.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Shield System",
          description:
            "Convert 150 health to shields. Defense Matrix restores shields based on 25% of its damage absorbed.",
          icon: "/images/perks/shield-system.png",
        },
        {
          name: "Precision Fusion",
          description:
            "Press R to reduce Fusion Cannons' spread by 75% for 3 seconds.",
          icon: "/images/perks/precision-fusion.png",
        },
      ],
    },
  },
  echo: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Focused Rush",
          description:
            "Focusing Beam's range is increased by 6 meters and movement speed is increased by 20% when active.",
          icon: "/images/perks/focused-rush.png",
        },
        {
          name: "Partial Scan",
          description: "Duplicate starts with 50% of its ultimate charge.",
          icon: "/images/perks/partial-scan.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Full Salvo",
          description: "Sticky Bombs fires 50% more projectiles.",
          icon: "/images/perks/full-salvo.png",
        },
        {
          name: "High Beams",
          description: "Focusing Beam eliminations reset Flight's cooldown.",
          icon: "/images/perks/high-beams.png",
        },
      ],
    },
  },
  emre: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Suppressive Security",
          description:
            "Override Protocol’s light rounds slow enemies by 30% for 1 second.",
          icon: "/images/perks/suppressive-security.png",
        },
        {
          name: "Enhanced Agility",
          description:
            "Siphon Blaster’s movement speed bonus is increased by 20% while not firing.",
          icon: "/images/perks/enhanced-agility.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Heat Sink",
          description:
            "Direct hits with Siphon Blaster refund 60% heat and increase its duration by 0.1 seconds.",
          icon: "/images/perks/heat-sink.png",
        },
        {
          name: "Cyber Adhesion",
          description:
            "Cyber Frag now sticks on contact, dealing 40 extra damage to stuck enemies.",
          icon: "/images/perks/cyber-adhesion.png",
        },
      ],
    },
  },
  freja: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Relentless Barrage",
          description:
            "Direct hits with Take Aim refund 8 automatic bolt ammo.",
          icon: "/images/perks/relentless-barrage.png",
        },
        {
          name: "Momentum Boost",
          description: "Quick Dash distance is increased by 20%.",
          icon: "/images/perks/momentum-boost.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Aerial Recovery",
          description:
            "After using Updraft, heal for 30 health per second until Freja touches the ground.",
          icon: "/images/perks/aerial-recovery.png",
        },
        {
          name: "Rising Winds",
          description:
            "Updraft gains an additional charge but has 20% decreased height.",
          icon: "/images/perks/rising-winds.png",
        },
      ],
    },
  },
  genji: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Swift Cuts",
          description:
            "Quick Melee reduces the cooldown of Swift Strike by 3 seconds.",
          icon: "/images/perks/swift-cuts.png",
        },
        {
          name: "Dragon's Thirst",
          description: "Dragonblade swings gain 30% lifesteal.",
          icon: "/images/perks/dragons-thirst.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Blade Twisting",
          description:
            "Swift Strike deals 25 additional damage over time if the enemy is below half health.",
          icon: "/images/perks/blade-twisting.png",
        },
        {
          name: "Meditation",
          description:
            "Regenerate 35 health per second while Deflect is active.",
          icon: "/images/perks/meditation.png",
        },
      ],
    },
  },
  hanzo: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Sonic Disruption",
          description: "Sonic Arrow hacks nearby Health Packs for 30 seconds.",
          icon: "/images/perks/sonic-disruption.png",
        },
        {
          name: "Dragon Fury",
          description:
            "After hitting an enemy with Primary Fire, gain 20% attack speed for 1.5 seconds.",
          icon: "/images/perks/dragon-fury.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Frost Arrow",
          description:
            "Press R to ready an explosive frost arrow, slowing enemies hit by 35% for 2 seconds.",
          icon: "/images/perks/frost-arrow.png",
        },
        {
          name: "Scatter Arrows",
          description:
            "On first ricochet, Storm Arrows split into 5 shots dealing 33% damage and bounce 1 extra time.",
          icon: "/images/perks/scatter-arrows.png",
        },
      ],
    },
  },
  hazard: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Deep Leap",
          description: "Violent Leap's range is increased by 15%.",
          icon: "/images/perks/deep-leap.png",
        },
        {
          name: "Anarchic Zeal",
          description: "Spike Guard's spikes gain 30% lifesteal.",
          icon: "/images/perks/anarchic-zeal.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Reconstitution",
          description:
            "Jagged Wall hits charge Spike Guard with 25 energy, up to 50 extra.",
          icon: "/images/perks/reconstitution.png",
        },
        {
          name: "Explosive Impalements",
          description:
            "Bonespur hits mark targets with spikes. Quick Melee and Violent Leap's slash detonate them for 40 explosive damage.",
          icon: "/images/perks/explosive-impalements.png",
        },
      ],
    },
  },
  illari: {
    minor: {
      level: 2,
      perks: [
        {
          name: "Rapid Construction",
          description:
            "Healing Pylon builds 300% faster and its cooldown is reduced by 1.5 seconds.",
          icon: "/images/perks/rapid-construction.png",
        },
        {
          name: "Summer Solstice",
          description:
            "Captive Sun grants Illari 20% increased flight and attack speed, and extends her flight duration by 3 seconds.",
          icon: "/images/perks/summer-solstice.png",
        },
      ],
    },
    major: {
      level: 3,
      perks: [
        {
          name: "Solar Flare",
          description:
            "While using Solar Rifle's healing beam, activate it to heal all allies in front of Illari for 100 health.",
          icon: "/images/perks/solar-flare.png",
        },
        {
          name: "Sunburn",
          description:
            "Outburst ignites enemies, dealing an additional 50 damage over 3 seconds.",
          icon: "/images/perks/sunburn.png",
        },
      ],
    },
  },
};
