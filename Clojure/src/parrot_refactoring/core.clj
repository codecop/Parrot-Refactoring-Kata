(ns parrot-refactoring.core)

(def ^:private load-factor 9.0)

(def ^:private base-speed 12.0)

(defn- compute-base-speed-for-voltage [voltage]
  (min 24.0 (* voltage base-speed)))

(defn speed [parrot]
  (case (:type parrot)
    :european-parrot base-speed
    :african-parrot (max 0.0 (- base-speed (* load-factor (:num-coconuts parrot))))
    :norwegian-blue-parrot (if (:nailed parrot)
                             0.0
                             (compute-base-speed-for-voltage (:voltage parrot)))
    (throw (Exception. "Should be unreachable!"))))

(defrecord EuropeanParrot [])
(defrecord AfricanParrot [num-coconuts])
(defrecord NorwegianBlueParrot [nailed voltage])

(defmulti speedx class)

(defmethod speedx EuropeanParrot [parrot]
  (speed {:type :european-parrot}))

(defmethod speedx AfricanParrot [parrot]
  (speed {:type :african-parrot
          :num-coconuts (:num-coconuts parrot)}))
